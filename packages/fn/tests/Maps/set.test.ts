import { describe, expect, it } from "bun:test"
import { Maps } from "../../src/Maps/index"

describe("Maps.set", () => {
    it("should set a value in a new map", () => {
        const target = new Map([["a", 1]])
        const result = Maps.set(target, "b", 2)
        expect(result).not.toBe(target)
        expect(Array.from(result)).toEqual([["a", 1], ["b", 2]])
        expect(Array.from(target)).toEqual([["a", 1]])
    })

    it("should return the same map when nothing changes", () => {
        const target = new Map<string, number | undefined>([["a", 1], ["b", undefined]])
        expect(Maps.set(target, "a", 1)).toBe(target)
        expect(Maps.set(target, "b", undefined)).toBe(target)
    })

    it("should add a key that is set to undefined", () => {
        const result = Maps.set(new Map<string, undefined>(), "a", undefined)
        expect(result.has("a")).toBe(true)
        expect(result.size).toBe(1)
    })
})
