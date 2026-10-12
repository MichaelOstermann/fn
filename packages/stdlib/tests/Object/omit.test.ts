import { describe, expect, it } from "bun:test"
import { omit } from "../../src/Object/omit"

describe("Object.omit", () => {
    it("should remove the keys", () => {
        expect(omit({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ b: 2 })
        expect(omit({ a: 1, b: 2 }, new Set(["a"] as const))).toEqual({ b: 2 })
    })

    it("should return the same object when nothing is removed", () => {
        const target: { a: number, b?: number } = { a: 1 }
        expect(omit(target, ["b"])).toBe(target as never)
        expect(omit(target, [])).toBe(target)
    })

    it("should remove keys that are given as numbers", () => {
        expect(omit({ 1: "one", 2: "two" }, [1])).toEqual({ 2: "two" })
    })

    it("should keep symbols, and what is called __proto__", () => {
        const symbol = Symbol("a")
        expect(omit({ a: 1, b: 2, [symbol]: 3 }, ["a"])).toEqual({ b: 2, [symbol]: 3 })
        expect(omit({ a: 1, [symbol]: 3 }, [symbol])).toEqual({ a: 1 })
        const parsed = JSON.parse(`{"__proto__":{"x":1},"a":1,"b":2}`) as { a: number, b: number }
        const result = omit(parsed, ["a"]) as Record<string, unknown>
        expect(Object.keys(result)).toEqual(["__proto__", "b"])
        expect(result["x"]).toBe(undefined)
    })

    it("should only look at its own properties", () => {
        const target = { a: 1 } as { a: number, toString?: unknown }
        expect(omit(target, ["toString"])).toBe(target as never)
        const inherited = Object.create({ a: 1 }) as { a: number, b?: number }
        inherited.b = 2
        expect(Object.keys(omit(inherited, ["b"]))).toEqual([])
    })
})
