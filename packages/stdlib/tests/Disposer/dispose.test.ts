import { describe, expect, it } from "bun:test"
import { Disposer } from "../../src/Disposer"

describe("Disposer.dispose", () => {
    it("should dispose callbacks", () => {
        const calls: number[] = []
        const dsp = new Disposer()
        dsp.add(() => calls.push(1))
        dsp.add(() => calls.push(2))
        dsp.add(() => calls.push(3))
        dsp.dispose()
        dsp.dispose()
        expect(calls).toEqual([3, 2, 1])
    })

    it("should dispose dsps #1", () => {
        const calls: number[] = []

        const dsp = new Disposer()
        dsp.add(() => calls.push(1))
        dsp.add(() => calls.push(2))
        dsp.add(() => calls.push(3))

        const dsp1 = new Disposer()
        dsp1.add(() => calls.push(4))
        dsp1.add(() => calls.push(5))
        dsp1.add(() => calls.push(6))

        const dsp2 = new Disposer()
        dsp2.add(() => calls.push(7))
        dsp2.add(() => calls.push(8))
        dsp2.add(() => calls.push(9))

        const dsp3 = new Disposer()
        dsp3.add(() => calls.push(10))
        dsp3.add(() => calls.push(11))
        dsp3.add(() => calls.push(12))

        dsp.add(dsp1)
        dsp.add(dsp2)
        dsp.add(dsp3)

        dsp.dispose()
        dsp.dispose()
        dsp1.dispose()
        dsp2.dispose()
        dsp3.dispose()

        expect(calls).toEqual([12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    })

    it("should dispose dsps #2", () => {
        const calls: number[] = []

        const dsp = new Disposer()
        dsp.add(() => calls.push(1))
        dsp.add(() => calls.push(2))
        dsp.add(() => calls.push(3))

        const dsp1 = new Disposer()
        dsp1.add(() => calls.push(4))
        dsp1.add(() => calls.push(5))
        dsp1.add(() => calls.push(6))

        const dsp2 = new Disposer()
        dsp2.add(() => calls.push(7))
        dsp2.add(() => calls.push(8))
        dsp2.add(() => calls.push(9))

        const dsp3 = new Disposer()
        dsp3.add(() => calls.push(10))
        dsp3.add(() => calls.push(11))
        dsp3.add(() => calls.push(12))

        dsp.add(dsp1)
        dsp.add(dsp2)
        dsp.add(dsp3)

        dsp2.dispose()
        dsp2.dispose()
        dsp3.dispose()
        dsp3.dispose()
        dsp1.dispose()
        dsp1.dispose()
        dsp.dispose()
        dsp.dispose()

        expect(calls).toEqual([9, 8, 7, 12, 11, 10, 6, 5, 4, 3, 2, 1])
    })

    it("should mark nested dsps as disposed", () => {
        const order: number[] = []
        const a = new Disposer()
        const b = new Disposer()
        const c = new Disposer()
        const other = new Disposer()

        a.add(() => order.push(1))
        a.add(b)
        a.add(() => order.push(4))
        b.add(() => order.push(2))
        b.add(c)
        c.add(() => order.push(3))
        other.add(b)

        a.dispose()

        expect(order).toEqual([4, 3, 2, 1])
        expect(a.disposed).toBe(true)
        expect(b.disposed).toBe(true)
        expect(c.disposed).toBe(true)
        // Disposed dsps remove themselves from everything else they have been added to.
        expect(other.includes(b)).toBe(false)

        // Adding to a disposed dsp disposes right away.
        b.add(() => order.push(5))
        expect(order).toEqual([4, 3, 2, 1, 5])
    })
})
