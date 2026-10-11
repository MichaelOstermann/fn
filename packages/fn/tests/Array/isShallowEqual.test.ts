import { describe, expect, it } from "bun:test"
import { isShallowEqual } from "../../src/Array/isShallowEqual"

describe("Array.isShallowEqual", () => {
    it("should compare the elements in order", () => {
        expect(isShallowEqual([1, 2], [1, 2])).toBe(true)
        expect(isShallowEqual([], [])).toBe(true)
        expect(isShallowEqual([1, 2], [2, 1])).toBe(false)
        expect(isShallowEqual([1, 2], [1])).toBe(false)
        expect(isShallowEqual([1], [1, 2])).toBe(false)
    })

    it("should compare elements by identity", () => {
        const value = {}
        expect(isShallowEqual([value], [value])).toBe(true)
        expect(isShallowEqual([{}], [{}])).toBe(false)
        expect(isShallowEqual([Number.NaN], [Number.NaN])).toBe(true)
    })

    it("should be the same array when it is", () => {
        const target = [{}]
        expect(isShallowEqual(target, target)).toBe(true)
    })
})
