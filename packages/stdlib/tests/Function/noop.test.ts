import { describe, expect, it } from "bun:test"
import { noop } from "../../src/Function/noop"

describe("Function.noop", () => {
    it("should do nothing", () => {
        const callback: (value: number) => void = noop
        expect(callback(1)).toBeUndefined()
    })
})
