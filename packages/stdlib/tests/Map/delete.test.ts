import { describe, expect, it } from "bun:test"
import { delete as _delete } from "../../src/Map/delete"

describe("Map.delete", () => {
    it("should remove an entry from a copy", () => {
        const target = new Map([["a", 1], ["b", 2]])
        expect([..._delete(target, "a")]).toEqual([["b", 2]])
        expect(target.size).toBe(2)
    })

    it("should return the same map when there is no such entry", () => {
        const target = new Map([["a", 1]])
        expect(_delete(target, "b")).toBe(target)
    })
})
