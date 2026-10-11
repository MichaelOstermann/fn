import { describe, expect, it } from "bun:test"
import { removeLast } from "../../src/Array/removeLast"

describe("Array.removeLast", () => {
    it("should remove the last occurrence", () => {
        expect(removeLast([1, 2, 1], 1)).toEqual([1, 2])
    })

    it("should return the same array when nothing changed", () => {
        const target = [1, 2, 3]
        expect(removeLast(target, 4)).toBe(target)
    })

    it("should not change what it was given", () => {
        const target = [1, 2, 1]
        expect(removeLast(target, 1)).toEqual([1, 2])
        expect(target).toEqual([1, 2, 1])
    })

    it("should change what it was given when asked to", () => {
        const target = [1, 2, 1]
        expect(removeLast(target, 1, { mut: true })).toBe(target)
        expect(target).toEqual([1, 2])
    })
})
