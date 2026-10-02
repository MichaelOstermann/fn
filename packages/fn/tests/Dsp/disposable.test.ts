import { describe, expect, it, vi } from "bun:test"
import { Dsp } from "../../src/Dsp/index"

describe("Dsp", () => {
    it("should be disposable", () => {
        const cb = vi.fn()
        const dsp = Dsp.create()
        Dsp.add(dsp, cb)

        dsp[Symbol.dispose]()

        expect(Dsp.isDisposed(dsp)).toBe(true)
        expect(cb).toHaveBeenCalledTimes(1)
    })

    it("should be disposed at the end of a using block", () => {
        const cb = vi.fn()
        {
            using dsp = Dsp.create()
            Dsp.add(dsp, cb)
            expect(cb).toHaveBeenCalledTimes(0)
        }
        expect(cb).toHaveBeenCalledTimes(1)
    })

    it("should dispose disposables", () => {
        const cb = vi.fn()
        const disposable = { [Symbol.dispose]: cb }
        const dsp = Dsp.create()

        Dsp.add(dsp, disposable)
        expect(Dsp.includes(dsp, disposable)).toBe(true)

        Dsp.dispose(dsp)
        expect(cb).toHaveBeenCalledTimes(1)
    })

    it("should dispose disposables immediately when already disposed", () => {
        const cb = vi.fn()
        const dsp = Dsp.create()
        Dsp.dispose(dsp)

        Dsp.add(dsp, { [Symbol.dispose]: cb })
        expect(cb).toHaveBeenCalledTimes(1)
    })

    it("should remove disposables", () => {
        const cb = vi.fn()
        const disposable = { [Symbol.dispose]: cb }
        const dsp = Dsp.create()

        Dsp.add(dsp, disposable)
        Dsp.remove(dsp, disposable)
        Dsp.dispose(dsp)

        expect(cb).toHaveBeenCalledTimes(0)
    })

    it("should recognize disposers of other copies of this module", () => {
        expect(Dsp.symbol).toBe(Symbol.for("@monstermann/fn/Dsp") as never)
        expect(Dsp.isDsp({ dsps: undefined, [Symbol.for("@monstermann/fn/Dsp")]: false, vals: undefined })).toBe(true)
    })
})
