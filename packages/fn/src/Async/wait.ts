import { dfdlT } from "../dfdlT"

/**
 * # wait
 *
 * ```ts
 * function Async.wait(duration: number): Promise<void>
 * ```
 *
 * Creates a promise that resolves after `duration` milliseconds.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Async } from "@monstermann/fn";
 *
 * await Async.wait(1000); // waits 1 second
 * ```
 *
 * ```ts [data-last]
 * import { Async } from "@monstermann/fn";
 *
 * pipe(1000, Async.wait()); // returns Promise<void>
 * ```
 *
 */
export const wait: {
    (): (duration: number) => Promise<void>
    (duration: number): Promise<void>
} = dfdlT((duration: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, Math.max(duration, 0)))
}, 1)
