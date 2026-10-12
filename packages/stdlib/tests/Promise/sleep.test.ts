import { describe, expect, it } from "bun:test"
import { sleep } from "../../src/Promise/sleep"

describe("Promise.sleep", () => {
    it("should resolve after the duration", async () => {
        const start = performance.now()
        expect(await sleep(20)).toBeUndefined()
        expect(performance.now() - start).toBeGreaterThanOrEqual(15)
    })

    it("should reject once aborted", async () => {
        const controller = new AbortController()
        const start = performance.now()
        setTimeout(() => controller.abort(new Error("stop")), 10)
        expect(sleep(60_000, controller.signal)).rejects.toThrow("stop")
        await sleep(20)
        expect(performance.now() - start).toBeLessThan(1000)
    })

    it("should reject right away when aborted already", async () => {
        const signal = AbortSignal.abort()
        expect(sleep(60_000, signal)).rejects.toBe(signal.reason)
    })

    it("should resolve when not aborted in time", async () => {
        const controller = new AbortController()
        await sleep(5, controller.signal)
        controller.abort()
    })
})
