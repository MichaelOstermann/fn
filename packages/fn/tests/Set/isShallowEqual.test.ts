import { describe, expect, it } from "bun:test"
import { isShallowEqual } from "../../src/Set/isShallowEqual"

describe("Set.isShallowEqual", () => {
    it("should compare values", () => {
        expect(isShallowEqual(new Set([1, 2]), new Set([2, 1]))).toBe(true)
        expect(isShallowEqual(new Set(), new Set())).toBe(true)
        expect(isShallowEqual(new Set([1]), new Set([2]))).toBe(false)
        expect(isShallowEqual(new Set([1]), new Set([1, 2]))).toBe(false)
        expect(isShallowEqual(new Set([1, 2]), new Set([1]))).toBe(false)
    })
})
