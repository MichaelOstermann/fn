import { describe, expect, it } from "bun:test"
import { range } from "../../src/Number/range"

describe("Number.range", () => {
    it("should count up to the end, which is not included", () => {
        expect([...range(3)]).toEqual([0, 1, 2])
        expect([...range(1, 4)]).toEqual([1, 2, 3])
        expect([...range(0, 10, 5)]).toEqual([0, 5])
        expect([...range(0)]).toEqual([])
        expect([...range(2, 2)]).toEqual([])
    })

    it("should count down", () => {
        expect([...range(3, 0)]).toEqual([3, 2, 1])
        expect([...range(-3)]).toEqual([0, -1, -2])
        expect([...range(10, 0, -5)]).toEqual([10, 5])
    })

    it("should yield nothing for a step that leads away from the end", () => {
        expect([...range(0, 3, -1)]).toEqual([])
        expect([...range(3, 0, 1)]).toEqual([])
    })

    it("should not add up rounding errors", () => {
        expect([...range(0, 1, 0.25)]).toEqual([0, 0.25, 0.5, 0.75])
        expect([...range(0, 0.5, 0.1)]).toEqual([0, 0.1, 0.2, 0.1 * 3, 0.4])
    })

    it("should be lazy", () => {
        const numbers = range(0, Infinity)
        expect(numbers.next().value).toBe(0)
        expect(numbers.next().value).toBe(1)
    })

    it("should throw for what never ends, or is no number", () => {
        expect(() => [...range(0, 3, 0)]).toThrow(RangeError)
        expect(() => [...range(Number.NaN)]).toThrow(RangeError)
        expect(() => [...range(-Infinity, 0)]).toThrow(RangeError)
        expect([...range(1, 1, 0)]).toEqual([])
    })
})
