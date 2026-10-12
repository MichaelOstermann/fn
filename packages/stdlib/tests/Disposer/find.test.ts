import { describe, expect, it } from "bun:test"
import { Disposer } from "../../src/Disposer"

describe("Disposer.find", () => {
    it("should return undefined for missing callbacks", () => {
        const dsp = new Disposer()
        const missing = (): void => {}
        expect(dsp.find(missing)).toBe(undefined)
    })

    it("should return undefined for missing dsps", () => {
        const dsp = new Disposer()
        expect(dsp.find(new Disposer())).toBe(undefined)
    })

    it("should return link for included callbacks", () => {
        const dsp = new Disposer()
        const cb = () => {}
        const link = dsp.add(cb)
        expect(dsp.find(cb)).toBe(link)
    })

    it("should return link for included dsps", () => {
        const dspA = new Disposer()
        const dspB = new Disposer()
        const link = dspA.add(dspB)
        expect(dspA.find(dspB)).toBe(link)
    })
})
