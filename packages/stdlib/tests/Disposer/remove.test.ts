import { describe, expect, it } from "bun:test"
import { Disposer } from "../../src/Disposer"

describe("Disposer.remove", () => {
    it("should remove callbacks", () => {
        const dsp = new Disposer()

        const cb1 = () => {}
        const cb2 = () => {}
        const cb3 = () => {}

        const l1 = dsp.add(cb1)
        const l2 = dsp.add(cb2)
        const l3 = dsp.add(cb3)

        dsp.remove(cb2)
        expect(l2!.nextVal).toBe(undefined)
        expect(l2!.prevVal).toBe(undefined)
        expect(l1!.nextVal).toBe(l3)
        expect(l3!.prevVal).toBe(l1)
        expect(dsp.vals).toBe(l3)

        dsp.remove(cb3)
        expect(l3!.nextVal).toBe(undefined)
        expect(l3!.prevVal).toBe(undefined)
        expect(l1!.nextVal).toBe(undefined)
        expect(dsp.vals).toBe(l1)

        dsp.remove(cb1)
        expect(l1!.nextVal).toBe(undefined)
        expect(l1!.prevVal).toBe(undefined)
        expect(dsp.vals).toBe(undefined)
    })

    it("should remove dsps #1", () => {
        const dsp = new Disposer()

        const dsp1 = new Disposer()
        const dsp2 = new Disposer()
        const dsp3 = new Disposer()

        const l1 = dsp.add(dsp1)
        const l2 = dsp.add(dsp2)
        const l3 = dsp.add(dsp3)

        dsp.remove(dsp2)
        expect(dsp2.dsps).toBe(undefined)
        expect(l2!.nextVal).toBe(undefined)
        expect(l2!.prevVal).toBe(undefined)
        expect(l1!.nextVal).toBe(l3)
        expect(l3!.prevVal).toBe(l1)
        expect(dsp.vals).toBe(l3)

        dsp.remove(dsp3)
        expect(dsp3.dsps).toBe(undefined)
        expect(l3!.nextVal).toBe(undefined)
        expect(l3!.prevVal).toBe(undefined)
        expect(l1!.nextVal).toBe(undefined)
        expect(dsp.vals).toBe(l1)

        dsp.remove(dsp1)
        expect(dsp1.dsps).toBe(undefined)
        expect(l1!.nextVal).toBe(undefined)
        expect(dsp.vals).toBe(undefined)
    })

    it("should remove dsps #2", () => {
        const dsp1 = new Disposer()
        const dsp2 = new Disposer()
        const dsp3 = new Disposer()

        const dsp = new Disposer()

        const l1 = dsp1.add(dsp)
        const l2 = dsp2.add(dsp)
        const l3 = dsp3.add(dsp)

        dsp2.remove(dsp)
        expect(l2!.nextDsp).toBe(undefined)
        expect(l2!.prevDsp).toBe(undefined)
        expect(l1!.nextDsp).toBe(l3)
        expect(l3!.prevDsp).toBe(l1)
        expect(dsp2.vals).toBe(undefined)
        expect(dsp.dsps).toBe(l3)

        dsp3.remove(dsp)
        expect(l3!.nextDsp).toBe(undefined)
        expect(l3!.prevDsp).toBe(undefined)
        expect(l1!.nextDsp).toBe(undefined)
        expect(dsp3.vals).toBe(undefined)
        expect(dsp.dsps).toBe(l1)

        dsp1.remove(dsp)
        expect(l1!.nextDsp).toBe(undefined)
        expect(dsp1.vals).toBe(undefined)
        expect(dsp.dsps).toBe(undefined)
    })
})
