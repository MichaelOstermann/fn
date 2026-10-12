import { describe, expect, it } from "bun:test"
import { Disposer } from "../../src/Disposer"

describe("Disposer.is", () => {
    it("should return true for dsp instances", () => {
        const dsp = new Disposer()
        expect(Disposer.is(dsp)).toBe(true)
    })

    it("should return false for anything else", () => {
        expect(Disposer.is(null)).toBe(false)
        expect(Disposer.is(undefined)).toBe(false)
        expect(Disposer.is(1)).toBe(false)
        expect(Disposer.is("string")).toBe(false)
        expect(Disposer.is({})).toBe(false)
        expect(Disposer.is([])).toBe(false)
    })
})
