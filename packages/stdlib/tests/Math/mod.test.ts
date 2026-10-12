import { describe, expect, it } from "bun:test"
import { mod } from "../../src/Math/mod"

describe("Math.mod", () => {
    it("should be the same as % for what is positive", () => {
        expect(mod(7, 5)).toBe(2)
        expect(mod(5, 5)).toBe(0)
        expect(mod(0, 5)).toBe(0)
        expect(mod(5.5, 2)).toBe(1.5)
    })

    it("should wrap around what is negative", () => {
        expect(mod(-1, 5)).toBe(4)
        expect(mod(-5, 5)).toBe(0)
        expect(mod(-6, 5)).toBe(4)
        expect(mod(-0.5, 2)).toBe(1.5)
    })

    it("should take the sign of the divisor", () => {
        expect(mod(1, -5)).toBe(-4)
        expect(mod(-1, -5)).toBe(-1)
        expect(mod(5, -5)).toBe(0)
    })

    it("should be no number without something to divide by", () => {
        expect(mod(1, 0)).toBeNaN()
        expect(mod(Number.NaN, 5)).toBeNaN()
    })
})
