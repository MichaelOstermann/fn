import { mkdtemp, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import Path from "node:path"
import { describe, expect, it } from "bun:test"
import { rolldown } from "rolldown"
import { fn, fnBun } from "../src"
import { globals, values } from "../src/globals.manifest"
import { functions, guards, namespaces } from "../src/manifest"

const entry = Path.join(import.meta.dirname, "__fixtures__/entry.ts")
const src = Path.resolve(import.meta.dirname, "../../fn/src")

/** Resolves the files of the published package to their sources, to not depend on a build. */
function resolveSource(path: string): string | undefined {
    if (!path.startsWith("@monstermann/fn/")) return
    const file = path.slice("@monstermann/fn/".length).replace(/\.mjs$/, "")
    return Path.join(src, file.endsWith("/index") ? `${file}.js` : `${file}.ts`)
}

async function evaluate(code: string): Promise<unknown> {
    const dir = await mkdtemp(Path.join(tmpdir(), "fn-transform-"))
    await Bun.write(Path.join(dir, "bundle.mjs"), code)
    const { result } = await import(Path.join(dir, "bundle.mjs"))
    await rm(dir, { recursive: true })
    return result
}

describe("manifest", () => {
    it("should list everything @monstermann/fn exports", async () => {
        const exports = Object.keys(await import("../../fn/src/index")).sort()
        expect([...namespaces, ...functions.keys()].sort()).toEqual(exports)
    })

    it("should match the files of @monstermann/fn", async () => {
        for (const name of namespaces) expect(await Bun.file(Path.join(src, name, "index.js")).exists()).toBe(true)
        for (const [name, file] of functions) expect(name in await import(Path.join(src, `${file}.ts`))).toBe(true)
        for (const name of guards) expect(await Bun.file(Path.join(src, `${name}.ts`)).exists()).toBe(true)
        for (const [name, file] of Object.entries(values)) expect(name in await import(Path.join(src, file))).toBe(true)
    })

    it("should list everything @monstermann/fn makes available on globals", async () => {
        for (const [global, names] of Object.entries(globals)) {
            // An object of functions that is a global of its own, like Rect.
            if (global in values) {
                expect([...names]).toEqual(Object.keys((await import(Path.join(src, values[global]!)))[global]).sort())
                continue
            }

            const files = await Array.fromAsync(new Bun.Glob("*.ts").scan(Path.join(src, global)))
            expect([...names]).toEqual(files.map(file => file.slice(0, -3)).sort())
            // Nothing that exists already.
            for (const name of names) expect(name in (globalThis as never)[global]).toBe(false)
        }

        for (const name of Object.keys(values)) expect(name in globalThis).toBe(false)
    })
})

describe("fn", () => {
    it("should skip files that are excluded or not included", () => {
        const code = `import { Rect } from "@monstermann/fn";\nRect.area(a);`
        const plugin = fn({ exclude: /skipped/ })
        expect(plugin.transform.handler(code, "/a/b.ts")?.code).toContain("_area(a)")
        expect(plugin.transform.handler(code, "/a/skipped.ts")).toBe(undefined)
        expect(plugin.transform.handler(code, "/a/b.css")).toBe(undefined)
    })

    it("should leave dependencies alone", () => {
        const code = `Array.removeAll(a, b);`
        expect(fn().transform.handler(code, "/a/b.ts")?.code).toContain("_removeAll(a, b)")
        expect(fn().transform.handler(code, "/a/node_modules/b/c.ts")).toBe(undefined)
        expect(fn().transform.handler(code, "node_modules/b/c.ts")).toBe(undefined)
        expect(fn().transform.handler(code, "C:\\a\\node_modules\\b\\c.ts")).toBe(undefined)
        expect(fn({ exclude: /\.test\.ts$/ }).transform.handler(code, "/a/node_modules/b/c.ts")).toBe(undefined)
    })

    it("should transform every kind of module", () => {
        const code = `Array.removeAll(a, b);`
        for (const path of ["/a/b.js", "/a/b.jsx", "/a/b.ts", "/a/b.tsx", "/a/b.mjs", "/a/b.mts", "/a/b.ts?v=1", "/a/b.tsx?react"]) {
            expect(fn().transform.handler(code, path)?.code).toContain("_removeAll(a, b)")
        }
        for (const path of ["/a/b.css", "/a/b.json", "/a/b.cjs", "/a/b.cts", "/a/b.ts.map"]) {
            expect(fn().transform.handler(code, path)).toBe(undefined)
        }
    })

    it("should only bundle what is used, without relying on the bundler to tree-shake", async () => {
        const bundle = await rolldown({
            input: entry,
            plugins: [fn(), { name: "sources", resolveId: resolveSource }],
            treeshake: false,
        })
        const { output } = await bundle.generate({ format: "esm" })
        const code = output[0].code

        expect(await evaluate(code)).toBe("one")
        expect(code).not.toContain("debounce")
        expect(code).not.toContain("translate")
        expect(code).not.toContain("replaceFirst")
        expect(code).not.toContain("did not run")
        expect(code).not.toContain("Pattern matching error")
    })
})

describe("fnBun", () => {
    it("should work as a plugin of Bun.build", async () => {
        const result = await Bun.build({
            entrypoints: [entry],
            plugins: [
                { name: "sources", setup: build => void build.onResolve({ filter: /^@monstermann\/fn\// }, ({ path }) => ({ path: resolveSource(path)! })) },
                fnBun(),
            ],
        })
        const code = await result.outputs[0]!.text()

        expect(await evaluate(code)).toBe("one")
        expect(code).not.toContain("debounce")
        expect(code).not.toContain("did not run")
    })

    it("should leave dependencies alone", async () => {
        const loaders: ((args: { loader: string, path: string }) => Promise<{ contents: string }>)[] = []
        fnBun().setup<string>({ onLoad: (_, callback) => loaders.push(callback) })
        const dir = await mkdtemp(Path.join(tmpdir(), "fn-transform-"))
        await Bun.write(Path.join(dir, "a.ts"), "Array.removeAll(a, b);")
        await Bun.write(Path.join(dir, "node_modules/b/c.ts"), "Array.removeAll(a, b);")

        expect((await loaders[0]!({ loader: "ts", path: Path.join(dir, "a.ts") })).contents).toContain("_removeAll(a, b)")
        expect((await loaders[0]!({ loader: "ts", path: Path.join(dir, "node_modules/b/c.ts") })).contents).toBe("Array.removeAll(a, b);")
        await rm(dir, { recursive: true })
    })
})
