import { describe, expect, it } from "bun:test"
import { Disposer } from "../../src/Disposer"

describe("Disposer.disposed", () => {
    it("should return true for disposed dsp instances", () => {
        const dsp = new Disposer()
        dsp.dispose()
        expect(dsp.disposed).toBe(true)
    })

    it("should return false for alive dsp instances", () => {
        const dsp = new Disposer()
        expect(dsp.disposed).toBe(false)
    })
})
