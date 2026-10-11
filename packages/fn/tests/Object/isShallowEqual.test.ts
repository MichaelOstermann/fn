import { describe, expect, it } from "bun:test"
import { isShallowEqual } from "../../src/Object/isShallowEqual"

describe("Object.isShallowEqual", () => {
    it("should compare properties", () => {
        expect(isShallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true)
        expect(isShallowEqual({}, {})).toBe(true)
        expect(isShallowEqual({ a: 1 }, { a: 2 })).toBe(false)
        expect(isShallowEqual<object>({ a: 1 }, { a: 1, b: 2 })).toBe(false)
        expect(isShallowEqual<object>({ a: 1, b: 2 }, { a: 1 })).toBe(false)
    })

    it("should compare values by identity", () => {
        const value = {}
        expect(isShallowEqual({ a: value }, { a: value })).toBe(true)
        expect(isShallowEqual({ a: {} }, { a: {} })).toBe(false)
    })

    it("should not take a missing key for an undefined value", () => {
        expect(isShallowEqual<object>({ a: undefined }, { b: undefined })).toBe(false)
    })
})
