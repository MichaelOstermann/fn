import { describe, expect, it } from "bun:test"
import { once } from "../../src/Function/once"

describe("Function.once", () => {
    it("should call the function once, and keep returning what it returned", () => {
        let calls = 0
        const create = once(() => ({ id: ++calls }))
        const first = create()
        expect(create()).toBe(first)
        expect(first).toEqual({ id: 1 })
        expect(calls).toBe(1)
    })

    it("should remember a result of nothing", () => {
        let calls = 0
        const run = once(() => void calls++)
        run()
        run()
        expect(calls).toBe(1)
    })

    it("should try again after a call that threw", () => {
        let calls = 0
        const run = once(() => {
            if (++calls === 1) throw new Error("failed")
            return calls
        })
        expect(run).toThrow("failed")
        expect(run()).toBe(2)
        expect(run()).toBe(2)
    })
})
