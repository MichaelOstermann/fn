import { describe, expect, it } from "bun:test"
import { pick } from "../../src/Object/pick"

describe("Object.pick", () => {
    it("should keep the keys", () => {
        expect(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 })
        expect(pick({ a: 1, b: 2 }, new Set(["a"] as const))).toEqual({ a: 1 })
        expect(pick({ a: 1 }, [])).toEqual({})
    })

    it("should leave out what is not there", () => {
        const target: { a: number, b?: number } = { a: 1 }
        expect(Object.keys(pick(target, ["a", "b"]))).toEqual(["a"])
    })

    it("should only pick its own properties, symbols and __proto__ included", () => {
        const symbol = Symbol("a")
        expect(pick({ a: 1, [symbol]: 2 }, [symbol])).toEqual({ [symbol]: 2 })
        expect(Object.keys(pick({ a: 1 } as { a: number, toString?: unknown }, ["toString"]))).toEqual([])
        const parsed = JSON.parse(`{"__proto__":{"x":1},"a":1}`) as Record<string, unknown>
        const result = pick(parsed, ["__proto__"]) as Record<string, unknown>
        expect(Object.keys(result)).toEqual(["__proto__"])
        expect(result["x"]).toBe(undefined)
    })
})
