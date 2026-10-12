import { describe, expect, it } from "bun:test"
import { delete as _delete } from "../../src/Set/delete"

describe("Set.delete", () => {
    it("should remove from a copy", () => {
        const target = new Set([1, 2])
        expect([..._delete(target, 1)]).toEqual([2])
        expect(target.size).toBe(2)
    })

    it("should return the same set when the value is not there", () => {
        const target = new Set([1])
        expect(_delete(target, 2)).toBe(target)
    })
})
