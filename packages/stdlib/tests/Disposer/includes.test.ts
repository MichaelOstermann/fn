import { describe, expect, it } from "bun:test"
import { Disposer } from "../../src/Disposer"

describe("Disposer.includes", () => {
    it("should return false for missing callbacks", () => {
        const dsp = new Disposer()
        expect(dsp.includes(() => {})).toBe(false)
    })

    it("should return false for missing dsps", () => {
        const dsp = new Disposer()
        expect(dsp.includes(new Disposer())).toBe(false)
    })

    it("should return true for included callbacks", () => {
        const dsp = new Disposer()
        const cb = () => {}
        dsp.add(cb)
        expect(dsp.includes(cb)).toBe(true)
    })

    it("should return true for included dsps", () => {
        const dspA = new Disposer()
        const dspB = new Disposer()
        dspA.add(dspB)
        expect(dspA.includes(dspB)).toBe(true)
        expect(dspB.includes(dspA)).toBe(false)
    })
})
