import { describe, expect, it } from "bun:test"
import { Dsp } from "../../src/Dsp/index"

describe("Dsp.dispose", () => {
    it("should dispose callbacks", () => {
        const calls: number[] = []
        const dsp = Dsp.create()
        Dsp.add(dsp, () => calls.push(1))
        Dsp.add(dsp, () => calls.push(2))
        Dsp.add(dsp, () => calls.push(3))
        Dsp.dispose(dsp)
        Dsp.dispose(dsp)
        expect(calls).toEqual([3, 2, 1])
    })

    it("should dispose dsps #1", () => {
        const calls: number[] = []

        const dsp = Dsp.create()
        Dsp.add(dsp, () => calls.push(1))
        Dsp.add(dsp, () => calls.push(2))
        Dsp.add(dsp, () => calls.push(3))

        const dsp1 = Dsp.create()
        Dsp.add(dsp1, () => calls.push(4))
        Dsp.add(dsp1, () => calls.push(5))
        Dsp.add(dsp1, () => calls.push(6))

        const dsp2 = Dsp.create()
        Dsp.add(dsp2, () => calls.push(7))
        Dsp.add(dsp2, () => calls.push(8))
        Dsp.add(dsp2, () => calls.push(9))

        const dsp3 = Dsp.create()
        Dsp.add(dsp3, () => calls.push(10))
        Dsp.add(dsp3, () => calls.push(11))
        Dsp.add(dsp3, () => calls.push(12))

        Dsp.add(dsp, dsp1)
        Dsp.add(dsp, dsp2)
        Dsp.add(dsp, dsp3)

        Dsp.dispose(dsp)
        Dsp.dispose(dsp)
        Dsp.dispose(dsp1)
        Dsp.dispose(dsp2)
        Dsp.dispose(dsp3)

        expect(calls).toEqual([12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    })

    it("should dispose dsps #2", () => {
        const calls: number[] = []

        const dsp = Dsp.create()
        Dsp.add(dsp, () => calls.push(1))
        Dsp.add(dsp, () => calls.push(2))
        Dsp.add(dsp, () => calls.push(3))

        const dsp1 = Dsp.create()
        Dsp.add(dsp1, () => calls.push(4))
        Dsp.add(dsp1, () => calls.push(5))
        Dsp.add(dsp1, () => calls.push(6))

        const dsp2 = Dsp.create()
        Dsp.add(dsp2, () => calls.push(7))
        Dsp.add(dsp2, () => calls.push(8))
        Dsp.add(dsp2, () => calls.push(9))

        const dsp3 = Dsp.create()
        Dsp.add(dsp3, () => calls.push(10))
        Dsp.add(dsp3, () => calls.push(11))
        Dsp.add(dsp3, () => calls.push(12))

        Dsp.add(dsp, dsp1)
        Dsp.add(dsp, dsp2)
        Dsp.add(dsp, dsp3)

        Dsp.dispose(dsp2)
        Dsp.dispose(dsp2)
        Dsp.dispose(dsp3)
        Dsp.dispose(dsp3)
        Dsp.dispose(dsp1)
        Dsp.dispose(dsp1)
        Dsp.dispose(dsp)
        Dsp.dispose(dsp)

        expect(calls).toEqual([9, 8, 7, 12, 11, 10, 6, 5, 4, 3, 2, 1])
    })

    it("should mark nested dsps as disposed", () => {
        const order: number[] = []
        const a = Dsp.create()
        const b = Dsp.create()
        const c = Dsp.create()
        const other = Dsp.create()

        Dsp.add(a, () => order.push(1))
        Dsp.add(a, b)
        Dsp.add(a, () => order.push(4))
        Dsp.add(b, () => order.push(2))
        Dsp.add(b, c)
        Dsp.add(c, () => order.push(3))
        Dsp.add(other, b)

        Dsp.dispose(a)

        expect(order).toEqual([4, 3, 2, 1])
        expect(Dsp.isDisposed(a)).toBe(true)
        expect(Dsp.isDisposed(b)).toBe(true)
        expect(Dsp.isDisposed(c)).toBe(true)
        // Disposed dsps remove themselves from everything else they have been added to.
        expect(Dsp.includes(other, b)).toBe(false)

        // Adding to a disposed dsp disposes right away.
        Dsp.add(b, () => order.push(5))
        expect(order).toEqual([4, 3, 2, 1, 5])
    })
})
