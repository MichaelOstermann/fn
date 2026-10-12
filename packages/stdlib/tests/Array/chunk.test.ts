import { describe, expect, it } from "bun:test"
import { chunk } from "../../src/Array/chunk"

describe("Array.chunk", () => {
    it("should split into arrays of a size, the last one with what is left", () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
        expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]])
        expect(chunk([1, 2], 5)).toEqual([[1, 2]])
        expect(chunk([], 2)).toEqual([])
        expect(chunk([1, 2, 3], 1.9)).toEqual([[1], [2], [3]])
    })

    it("should return new arrays", () => {
        const target = [1, 2]
        expect(chunk(target, 2)[0]).not.toBe(target)
    })

    it("should throw for a size that is none", () => {
        expect(() => chunk([1], 0)).toThrow(RangeError)
        expect(() => chunk([1], -1)).toThrow(RangeError)
        expect(() => chunk([1], Number.NaN)).toThrow(RangeError)
    })
})
