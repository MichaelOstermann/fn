import { describe, expect, it } from "bun:test"
import { clamp } from "../../src/Math/clamp"

describe("Math.clamp", () => {
    it("should constrain a value", () => {
        expect(clamp(10, 0, 5)).toBe(5)
        expect(clamp(-2, 0, 5)).toBe(0)
        expect(clamp(3, 0, 5)).toBe(3)
    })
})
