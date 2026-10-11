import { describe, expect, it } from "bun:test"
import { shuffle } from "../../src/Array/shuffle"

describe("Array.shuffle", () => {
    it("should keep every element", () => {
        const target = Array.from({ length: 50 }, (_, i) => i)
        const result = shuffle(target)
        expect(result).not.toBe(target)
        expect(result.toSorted((a, b) => a - b)).toEqual(target)
    })

    it("should change the order", () => {
        const target = Array.from({ length: 50 }, (_, i) => i)
        expect(shuffle(target)).not.toEqual(target)
    })

    it("should change what it was given when asked to", () => {
        const target = Array.from({ length: 50 }, (_, i) => i)
        expect(shuffle(target, { mut: true })).toBe(target)
        expect(target).not.toEqual(Array.from({ length: 50 }, (_, i) => i))
        expect(target.toSorted((a, b) => a - b)).toEqual(Array.from({ length: 50 }, (_, i) => i))
    })
})
