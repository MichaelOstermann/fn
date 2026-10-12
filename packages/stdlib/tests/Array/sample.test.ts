import { describe, expect, it } from "bun:test"
import { sample } from "../../src/Array/sample"

describe("Array.sample", () => {
    it("should return one of the elements", () => {
        const target = [1, 2, 3]
        for (let i = 0; i < 20; i++) expect(target).toContain(sample(target)!)
    })

    it("should return undefined when there are none", () => {
        expect(sample([])).toBe(undefined)
    })
})
