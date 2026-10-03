import { describe, expect, it } from "bun:test"
import { debounce } from "../../src/Async/debounce"

const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms))

describe("Async.debounce", () => {
    it("should call with the last arguments once calls stop", async () => {
        const calls: number[] = []
        const fn = debounce((n: number) => void calls.push(n), { wait: 20 })
        fn(1)
        fn(2)
        fn(3)
        expect(calls).toEqual([])
        await sleep(60)
        expect(calls).toEqual([3])
    })

    it("should call immediately with leading", async () => {
        const calls: number[] = []
        const fn = debounce((n: number) => void calls.push(n), { leading: true, wait: 20 })
        fn(1)
        expect(calls).toEqual([1])
        fn(2)
        fn(3)
        expect(calls).toEqual([1])
        await sleep(60)
        expect(calls).toEqual([1, 3])
        fn(4)
        expect(calls).toEqual([1, 3, 4])
    })

    it("should only call on the leading edge without trailing", async () => {
        const calls: number[] = []
        const fn = debounce((n: number) => void calls.push(n), { leading: true, trailing: false, wait: 20 })
        fn(1)
        fn(2)
        await sleep(60)
        expect(calls).toEqual([1])
        fn(3)
        expect(calls).toEqual([1, 3])
    })

    it("should call after maxWait while calls keep coming", async () => {
        const calls: number[] = []
        const fn = debounce((n: number) => void calls.push(n), { maxWait: 50, wait: 30 })
        for (let i = 0; i < 8; i++) {
            fn(i)
            await sleep(10)
        }
        expect(calls.length).toBeGreaterThan(0)
    })

    it("should resolve idle when nothing has been called", async () => {
        const fn = debounce(() => {}, { wait: 20 })
        expect(fn.isIdle()).toBe(true)
        expect(await Promise.race([fn.idle().then(() => "idle"), sleep(50)])).toBe("idle")
    })

    it("should resolve idle after pending calls are done", async () => {
        const calls: number[] = []
        const fn = debounce((n: number) => void calls.push(n), { wait: 20 })
        fn(1)
        expect(fn.isPending()).toBe(true)
        await fn.idle()
        expect(calls).toEqual([1])
        expect(fn.isIdle()).toBe(true)
    })

    it("should flush and clear", async () => {
        const calls: number[] = []
        const fn = debounce((n: number) => void calls.push(n), { wait: 20 })
        fn(1)
        fn.flush()
        expect(calls).toEqual([1])
        fn(2)
        fn.clear()
        await sleep(60)
        expect(calls).toEqual([1])
    })

    it("should only flush the call that was pending when flushing", async () => {
        const calls: number[] = []
        const releases: (() => void)[] = []
        const fn = debounce(async (n: number) => {
            calls.push(n)
            await new Promise<void>(resolve => releases.push(resolve))
        }, { wait: 30 })

        fn(1)
        fn.flush()
        fn(2)
        fn.flush()
        releases.shift()!()
        await sleep(1)
        expect(calls).toEqual([1, 2])

        // Not flushed, this one has to wait again.
        fn(3)
        releases.shift()!()
        await sleep(1)
        expect(calls).toEqual([1, 2])

        await sleep(60)
        expect(calls).toEqual([1, 2, 3])
        releases.shift()!()
        await fn.idle()
    })

    it("should forget about a flush when cleared", async () => {
        const calls: number[] = []
        const releases: (() => void)[] = []
        const fn = debounce(async (n: number) => {
            calls.push(n)
            await new Promise<void>(resolve => releases.push(resolve))
        }, { wait: 30 })

        fn(1)
        fn.flush()
        fn(2)
        fn.flush()
        fn.clear()
        fn(3)
        releases.shift()!()
        await sleep(1)
        expect(calls).toEqual([1])

        await sleep(60)
        expect(calls).toEqual([1, 3])
        releases.shift()!()
        await fn.idle()
    })
})
