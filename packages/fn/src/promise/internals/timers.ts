import { isIterable } from "../../function/isIterable"

export interface Timer {
    tid: NodeJS.Timeout | undefined
    timeout: number
    callback: () => void
}

type Timers = Timer | Iterable<Timer>

export function createTimer(timeout: number, callback: () => void): Timer {
    return {
        callback,
        tid: undefined,
        timeout,
    }
}

export function clearTimer(timer: Timers): void {
    if (isIterable(timer)) return Array.from(timer).forEach(clearTimer)
    if (timer.timeout < 0) return
    timer.tid = void clearTimeout(timer.tid)
}

export function startTimer(timer: Timers): void {
    if (isIterable(timer)) return Array.from(timer).forEach(startTimer)
    if (timer.timeout < 0) return
    if (timer.tid != null) return
    timer.tid = setTimeout(() => {
        timer.tid = undefined
        timer.callback()
    }, timer.timeout)
}

export function restartTimer(timer: Timers): void {
    if (isIterable(timer)) return Array.from(timer).forEach(restartTimer)
    if (timer.timeout < 0) return
    clearTimer(timer)
    startTimer(timer)
}
