import Path from "node:path"
import { describe, expect, it } from "bun:test"
import { define } from "../src/internals/define"

const src = Path.resolve(import.meta.dirname, "../src")

/** Runs in a process of its own, for the globals of this one to stay as they are. */
function run(code: string): { ok: boolean, output: string } {
    const result = Bun.spawnSync(["bun", "--eval", code], { cwd: src, stderr: "pipe", stdout: "pipe" })
    return { ok: result.exitCode === 0, output: `${result.stdout}${result.stderr}`.trim() }
}

describe("globals", () => {
    it("should report that nothing is available", () => {
        const result = run(`import "./globals";`)
        expect(result.ok).toBe(false)
        expect(result.output).toContain("@monstermann/stdlib-transform did not run")
    })

    it("should pass when the globals have been patched", () => {
        const result = run(`import "./patch"; import "./globals"; console.log(JSON.stringify(Array.removeAll([1, 2], [1])));`)
        expect(result).toEqual({ ok: true, output: "[2]" })
    })
})

describe("patch", () => {
    it("should make everything available", () => {
        const result = run(`
            import "./patch";
            import "./patch";
            const debounced = Function.debounce(() => {}, { wait: 1 });
            console.log(JSON.stringify([Array.map([1], x => x + 1), typeof debounced, Object.keys(Array), Object.keys(Function)]));
        `)
        expect(result).toEqual({ ok: true, output: `[[2],"function",[],[]]` })
    })

    it("should make what is a global of its own available", () => {
        const result = run(`
            import "./patch";
            console.log(JSON.stringify([pipe(1, x => x + 1), match(1).case(1, "one").unwrapOr("other"), Duration.parse("4ms"), Ok(1).unwrap(), Err("a").unwrapOr(2), typeof ResultAsync]));
        `)
        expect(result).toEqual({ ok: true, output: `[2,"one",4,1,2,"function"]` })
    })

    it("should not replace what exists", () => {
        const global = run(`globalThis.pipe = () => {}; await import("./patch");`)
        expect(global.ok).toBe(false)
        expect(global.output).toContain("globalThis.pipe exists already")

        const result = run(`Array.removeAll = () => []; await import("./patch");`)
        expect(result.ok).toBe(false)
        expect(result.output).toContain("Array.removeAll exists already")
    })
})

describe("define", () => {
    it("should define what does not exist", () => {
        const target: Record<string, unknown> = {}
        const a = (): number => 1
        define(target, "Target", { a })
        expect(target["a"]).toBe(a)
        expect(Object.keys(target)).toEqual([])
    })

    it("should accept what it defined itself", () => {
        const target = {}
        const a = (): number => 1
        define(target, "Target", { a })
        expect(() => define(target, "Target", { a })).not.toThrow()
    })

    it("should reject what exists, own or inherited", () => {
        expect(() => define({ a: 1 }, "Target", { a: () => 1 })).toThrow("Target.a exists already")
        expect(() => define({}, "Target", { toString: () => "" })).toThrow("Target.toString exists already")
    })
})
