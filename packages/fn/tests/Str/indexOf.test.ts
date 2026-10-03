import { describe, expect, it } from "bun:test"
import { Str } from "../../src/Str/index"

describe("Str.indexOfOr, lastIndexOfOr and their variations", () => {
    it("should return the index when found", () => {
        expect(Str.indexOfOr("abcabc", "b", 99)).toBe(1)
        expect(Str.indexOfOrElse("abcabc", "b", () => 99)).toBe(1)
        expect(Str.indexOfOrThrow("abcabc", "b")).toBe(1)
        expect(Str.lastIndexOfOr("abcabc", "b", 99)).toBe(4)
        expect(Str.lastIndexOfOrElse("abcabc", "b", () => 99)).toBe(4)
        expect(Str.lastIndexOfOrThrow("abcabc", "b")).toBe(4)
        expect(Str.indexOfOr("abc", "a", 99)).toBe(0)
    })

    it("should fall back when not found", () => {
        expect(Str.indexOfOr("abc", "z", 99)).toBe(99)
        expect(Str.indexOfOrElse("abc", "z", target => target.length)).toBe(3)
        expect(() => Str.indexOfOrThrow("abc", "z")).toThrow()
        expect(Str.lastIndexOfOr("abc", "z", 99)).toBe(99)
        expect(Str.lastIndexOfOrElse("abc", "z", target => target.length)).toBe(3)
        expect(() => Str.lastIndexOfOrThrow("abc", "z")).toThrow()
    })
})
