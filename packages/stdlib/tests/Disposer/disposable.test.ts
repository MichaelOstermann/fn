import { describe, expect, it, vi } from "bun:test"
import { Disposer } from "../../src/Disposer"

describe("Disposer", () => {
    it("should be disposable", () => {
        const cb = vi.fn()
        const dsp = new Disposer()
        dsp.add(cb)

        dsp[Symbol.dispose]()

        expect(dsp.disposed).toBe(true)
        expect(cb).toHaveBeenCalledTimes(1)
    })

    it("should be disposed at the end of a using block", () => {
        const cb = vi.fn()
        {
            using dsp = new Disposer()
            dsp.add(cb)
            expect(cb).toHaveBeenCalledTimes(0)
        }
        expect(cb).toHaveBeenCalledTimes(1)
    })

    it("should dispose disposables", () => {
        const cb = vi.fn()
        const disposable = { [Symbol.dispose]: cb }
        const dsp = new Disposer()

        dsp.add(disposable)
        expect(dsp.includes(disposable)).toBe(true)

        dsp.dispose()
        expect(cb).toHaveBeenCalledTimes(1)
    })

    it("should dispose disposables immediately when already disposed", () => {
        const cb = vi.fn()
        const dsp = new Disposer()
        dsp.dispose()

        dsp.add({ [Symbol.dispose]: cb })
        expect(cb).toHaveBeenCalledTimes(1)
    })

    it("should remove disposables", () => {
        const cb = vi.fn()
        const disposable = { [Symbol.dispose]: cb }
        const dsp = new Disposer()

        dsp.add(disposable)
        dsp.remove(disposable)
        dsp.dispose()

        expect(cb).toHaveBeenCalledTimes(0)
    })

    it("should recognize disposers of other copies of this package", () => {
        expect(Disposer.is({ [Symbol.for("@monstermann/stdlib/Disposer")]: true })).toBe(true)
    })
})
