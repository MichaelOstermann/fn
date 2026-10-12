import { describe, expect, it } from "bun:test"
import { middleware } from "../../src/Function/middleware"

describe("Function.middleware", () => {
    it("should call the function as it is without anything in between", () => {
        const add = middleware((a: number, b: number) => a + b)
        expect(add(1, 2)).toBe(3)
    })

    it("should call what was added first first, and the function last", () => {
        const calls: string[] = []
        const run = middleware((value: string) => {
            calls.push(`fn ${value}`)
            return value
        })
        run.use((next, value) => {
            calls.push("a")
            return `${next(`${value}a`)}A`
        })
        run.use((next, value) => {
            calls.push("b")
            return `${next(`${value}b`)}B`
        })
        expect(run("-")).toBe("-abBA")
        expect(calls).toEqual(["a", "b", "fn -ab"])
    })

    it("should let a middleware not pass on, or pass on several times", () => {
        let calls = 0
        const run = middleware((value: number) => {
            calls++
            return value
        })
        const remove = run.use(() => -1)
        expect(run(1)).toBe(-1)
        expect(calls).toBe(0)
        remove()
        run.use((next, value) => next(value) + next(value))
        expect(run(2)).toBe(4)
        expect(calls).toBe(2)
    })

    it("should remove a middleware, once", () => {
        const run = middleware((value: string) => value)
        const double = (next: (value: string) => string, value: string): string => next(value + value)
        const first = run.use(double)
        run.use(double)
        expect(run("a")).toBe("aaaa")
        first()
        first()
        expect(run("a")).toBe("aa")
    })

    it("should pass on a promise as it is", async () => {
        const run = middleware(async (value: number) => value)
        run.use(async (next, value) => await next(value) + 1)
        expect(await run(1)).toBe(2)
    })
})
