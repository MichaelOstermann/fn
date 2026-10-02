import { describe, expect, it } from "bun:test"
import { throttle } from "../../src/Async/throttle"

const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms))

describe("Async.throttle", () => {
    it("should call at most once per wait with the last arguments", async () => {
        const calls: number[] = []
        const fn = throttle((n: number) => void calls.push(n), { wait: 30 })
        fn(1)
        fn(2)
        expect(calls).toEqual([])
        await sleep(60)
        expect(calls).toEqual([2])
    })

    it("should call immediately with leading", async () => {
        const calls: number[] = []
        const fn = throttle((n: number) => void calls.push(n), { leading: true, wait: 40 })
        fn(1)
        expect(calls).toEqual([1])
        fn(2)
        fn(3)
        expect(calls).toEqual([1])
        await sleep(60)
        expect(calls).toEqual([1, 3])
    })

    it("should not call twice in a row after a trailing call", async () => {
        const calls: number[] = []
        const fn = throttle((n: number) => void calls.push(n), { leading: true, wait: 40 })
        fn(1)
        fn(2)
        await sleep(50)
        expect(calls).toEqual([1, 2])
        fn(3)
        expect(calls).toEqual([1, 2])
        await sleep(60)
        expect(calls).toEqual([1, 2, 3])
        await sleep(50)
        fn(4)
        expect(calls).toEqual([1, 2, 3, 4])
    })

    it("should drop calls within the wait time without trailing", async () => {
        const calls: number[] = []
        const fn = throttle((n: number) => void calls.push(n), { leading: true, trailing: false, wait: 30 })
        fn(1)
        fn(2)
        await sleep(60)
        expect(calls).toEqual([1])
    })

    it("should resolve idle when nothing has been called", async () => {
        const fn = throttle(() => {}, { wait: 20 })
        expect(await Promise.race([fn.idle().then(() => "idle"), sleep(50)])).toBe("idle")
    })
})
