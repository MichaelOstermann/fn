import { describe, expect, it } from "bun:test"
import { isShallowEqual } from "../../src/Map/isShallowEqual"

describe("Map.isShallowEqual", () => {
    it("should compare keys and values", () => {
        expect(isShallowEqual(new Map([[1, "a"], [2, "b"]]), new Map([[2, "b"], [1, "a"]]))).toBe(true)
        expect(isShallowEqual(new Map(), new Map())).toBe(true)
        expect(isShallowEqual(new Map([[1, "a"]]), new Map([[1, "b"]]))).toBe(false)
        expect(isShallowEqual(new Map([[1, "a"]]), new Map([[2, "a"]]))).toBe(false)
        expect(isShallowEqual(new Map([[1, "a"]]), new Map([[1, "a"], [2, "b"]]))).toBe(false)
    })

    it("should compare values by identity", () => {
        const value = {}
        expect(isShallowEqual(new Map([[1, value]]), new Map([[1, value]]))).toBe(true)
        expect(isShallowEqual(new Map([[1, {}]]), new Map([[1, {}]]))).toBe(false)
    })

    it("should not take a missing key for an undefined value", () => {
        expect(isShallowEqual(new Map([[1, undefined]]), new Map([[2, undefined]]))).toBe(false)
        expect(isShallowEqual(new Map([[1, undefined]]), new Map([[1, undefined]]))).toBe(true)
    })
})
