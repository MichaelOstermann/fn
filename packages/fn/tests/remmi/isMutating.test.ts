import { describe, expect, it } from "bun:test"
import { isMutating, withMutations } from "../../src/remmi/index"

describe("isMutating", () => {
    it("should return true inside mutation contexts", () => {
        expect.hasAssertions()
        withMutations(() => {
            expect(isMutating()).toBe(true)
        })
    })

    it("should return false outside mutation contexts", () => {
        expect(isMutating()).toBe(false)
    })
})
