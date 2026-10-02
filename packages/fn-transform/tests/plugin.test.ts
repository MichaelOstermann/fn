import { mkdtemp, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import Path from "node:path"
import { describe, expect, it } from "bun:test"
import { rolldown } from "rolldown"
import * as generated from "../scripts/manifest"
import { fn, transform } from "../src"
import * as manifest from "../src/manifest"

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
    it("should be up to date", () => {
        expect([...manifest.namespaces].sort()).toEqual([...generated.namespaces].sort())
        expect(manifest.files).toEqual(generated.files)
    })
})

describe("fn", () => {
    it("should skip files that are excluded or not included", () => {
        const code = `import { Arr } from "@monstermann/fn";\nArr.at(a, 0);`
        const plugin = fn({ exclude: /skipped/ })
        expect(plugin.transform.handler(code, "/a/b.ts")?.code).toContain("_at(a, 0)")
        expect(plugin.transform.handler(code, "/a/skipped.ts")).toBe(undefined)
        expect(plugin.transform.handler(code, "/a/b.css")).toBe(undefined)
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
        expect(code).not.toContain("Rect")
        expect(code).not.toContain("findLast")
        expect(code).not.toContain("Pattern matching error")
    })
})

describe("transform", () => {
    it("should work in an onLoad of Bun.build", async () => {
        const result = await Bun.build({
            entrypoints: [entry],
            plugins: [{
                name: "transforms",
                setup(build) {
                    build.onResolve({ filter: /^@monstermann\/fn\// }, ({ path }) => ({ path: resolveSource(path)! }))
                    build.onLoad({ filter: /\.tsx?$/ }, async ({ loader, path }) => {
                        const code = await Bun.file(path).text()
                        return { contents: transform(code, path)?.code ?? code, loader }
                    })
                },
            }],
        })
        const code = await result.outputs[0]!.text()

        expect(await evaluate(code)).toBe("one")
        expect(code).not.toContain("debounce")
    })
})
