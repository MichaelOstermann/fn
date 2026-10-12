import { describe, expect, it, vi } from "bun:test"
import { Disposer } from "../../src/Disposer"

describe("Disposer.add", () => {
    it("should link callbacks", () => {
        const dsp = new Disposer()

        const cb1 = () => {}
        const cb2 = () => {}

        const l1 = dsp.add(cb1)
        expect(dsp.vals).toBe(l1)
        expect(l1!.val).toBe(cb1)
        expect(l1!.disposer).toBe(dsp)
        expect(l1!.nextDsp).toBe(undefined)
        expect(l1!.prevDsp).toBe(undefined)
        expect(l1!.nextVal).toBe(undefined)
        expect(l1!.prevVal).toBe(undefined)

        const l2 = dsp.add(cb2)
        expect(dsp.vals).toBe(l2)
        expect(l2!.val).toBe(cb2)
        expect(l2!.nextDsp).toBe(undefined)
        expect(l2!.prevDsp).toBe(undefined)
        expect(l2!.nextVal).toBe(undefined)
        expect(l2!.prevVal).toBe(l1)
        expect(l1!.nextVal).toBe(l2)
    })

    it("should link dsps #1", () => {
        const dsp = new Disposer()
        const dsp1 = new Disposer()
        const dsp2 = new Disposer()

        const l1 = dsp.add(dsp1)
        expect(dsp.vals).toBe(l1)
        expect(dsp.vals).toBe(l1)
        expect(dsp1.dsps).toBe(l1)
        expect(l1!.val).toBe(dsp1)
        expect(l1!.disposer).toBe(dsp)
        expect(l1!.nextDsp).toBe(undefined)
        expect(l1!.prevDsp).toBe(undefined)
        expect(l1!.nextVal).toBe(undefined)
        expect(l1!.prevVal).toBe(undefined)

        const l2 = dsp.add(dsp2)
        expect(dsp.vals).toBe(l2)
        expect(dsp2.dsps).toBe(l2)
        expect(l2!.val).toBe(dsp2)
        expect(l2!.nextDsp).toBe(undefined)
        expect(l2!.prevDsp).toBe(undefined)
        expect(l2!.nextVal).toBe(undefined)
        expect(l2!.prevVal).toBe(l1)
        expect(l1!.nextVal).toBe(l2)
    })

    it("should link dsps #2", () => {
        const dsp1 = new Disposer()
        const dsp2 = new Disposer()
        const dsp = new Disposer()

        const l1 = dsp1.add(dsp)
        expect(dsp.dsps).toBe(l1)
        expect(l1!.nextDsp).toBe(undefined)
        expect(l1!.prevDsp).toBe(undefined)
        expect(l1!.disposer).toBe(dsp1)

        const l2 = dsp2.add(dsp)
        expect(dsp.dsps).toBe(l2)
        expect(l1!.nextDsp).toBe(l2)
        expect(l1!.prevDsp).toBe(undefined)
        expect(l2!.nextDsp).toBe(undefined)
        expect(l2!.prevDsp).toBe(l1)
        expect(l2!.disposer).toBe(dsp2)
    })

    it("should prevent infinite recursion", () => {
        const dsp = new Disposer()
        const link = dsp.add(dsp)
        expect(link).toBe(undefined)
        expect(dsp.vals).toBe(undefined)
        expect(dsp.dsps).toBe(undefined)
    })

    it("should not link disposed dsps", () => {
        const dsp1 = new Disposer()
        const dsp2 = new Disposer()
        dsp2.dispose()
        const link = dsp1.add(dsp2)
        expect(link).toBe(undefined)
        expect(dsp1.vals).toBe(undefined)
        expect(dsp1.dsps).toBe(undefined)
        expect(dsp2.vals).toBe(undefined)
        expect(dsp2.dsps).toBe(undefined)
    })

    it("should immediately dispose callbacks", () => {
        const dsp = new Disposer()
        dsp.dispose()
        const cb = vi.fn()
        const link = dsp.add(cb)
        expect(cb).toBeCalled()
        expect(link).toBe(undefined)
        expect(dsp.vals).toBe(undefined)
        expect(dsp.dsps).toBe(undefined)
    })

    it("should immediately dispose dsps", () => {
        const dsp1 = new Disposer()
        const dsp2 = new Disposer()
        dsp1.dispose()
        const cb = vi.fn()
        dsp2.add(cb)
        const link = dsp1.add(dsp2)
        expect(cb).toBeCalled()
        expect(link).toBe(undefined)
        expect(dsp1.vals).toBe(undefined)
        expect(dsp1.dsps).toBe(undefined)
        expect(dsp2.vals).toBe(undefined)
        expect(dsp2.dsps).toBe(undefined)
    })
})
