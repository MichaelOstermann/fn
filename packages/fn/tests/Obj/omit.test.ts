import { describe, expect, it } from "bun:test"
import { Obj } from "../../src/Obj/index"

describe("Obj.omit", () => {
    it("should remove the keys", () => {
        expect(Obj.omit({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ b: 2 })
    })

    it("should return the same object when nothing is removed", () => {
        const target: Record<string, number> = { a: 1 }
        expect(Obj.omit(target, ["b"])).toBe(target)
        expect(Obj.omit(target, [])).toBe(target)
    })

    it("should accept any iterable", () => {
        expect(Obj.omit({ a: 1, b: 2 }, new Set(["a"] as const))).toEqual({ b: 2 })
        const keys = function* (): Generator<"a" | "b"> {
            yield "a"
            yield "b"
        }
        expect(Obj.omit({ a: 1, b: 2, c: 3 }, keys())).toEqual({ c: 3 })
    })

    it("should remove keys that are given as numbers", () => {
        expect(Obj.omit({ 1: "one", 2: "two" }, [1])).toEqual({ 2: "two" })
    })
})
