import { describe, expect, it } from "bun:test"
import { add } from "../../src/Set/add"

describe("Set.add", () => {
    it("should add to a copy", () => {
        const target = new Set([1])
        expect([...add(target, 2)]).toEqual([1, 2])
        expect([...target]).toEqual([1])
    })

    it("should return the same set when the value is there already", () => {
        const target = new Set([1])
        expect(add(target, 1)).toBe(target)
    })
})
