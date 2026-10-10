import { describe, expect, it } from "bun:test"
import { Arr } from "../../src/Arr/index"

const negative = [-5, -3, -8]
const positive = [5, 3, 8]
const mixed = [-5, 3, 0]

describe("Arr.max", () => {
    it("should return the largest value, also when all are negative", () => {
        expect(Arr.maxOr(negative, null)).toBe(-3)
        expect(Arr.maxOrElse(negative, () => null)).toBe(-3)
        expect(Arr.maxOrThrow(negative)).toBe(-3)
        expect(Arr.maxOr(positive, null)).toBe(8)
        expect(Arr.maxOr(mixed, null)).toBe(3)
    })

    it("should fall back when empty", () => {
        expect(Arr.maxOr([], null)).toBe(null)
        expect(Arr.maxOrElse([], () => null)).toBe(null)
        expect(() => Arr.maxOrThrow([])).toThrow()
    })
})

describe("Arr.min", () => {
    it("should return the smallest value, also when all are positive", () => {
        expect(Arr.minOr(positive, null)).toBe(3)
        expect(Arr.minOrElse(positive, () => null)).toBe(3)
        expect(Arr.minOrThrow(positive)).toBe(3)
        expect(Arr.minOr(negative, null)).toBe(-8)
        expect(Arr.minOr(mixed, null)).toBe(-5)
    })

    it("should fall back when empty", () => {
        expect(Arr.minOr([], null)).toBe(null)
        expect(Arr.minOrElse([], () => null)).toBe(null)
        expect(() => Arr.minOrThrow([])).toThrow()
    })
})
