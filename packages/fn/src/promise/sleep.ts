import { dual } from "@monstermann/dfdl"

/**
 * `sleep(duration)`
 *
 * Creates a promise that resolves after `duration` milliseconds.
 *
 * ```ts
 * await sleep(1000); // waits 1 second
 * ```
 *
 * ```ts
 * pipe(1000, sleep()); // returns Promise<void>
 * ```
 */
export const sleep: {
    (): (duration: number) => Promise<void>
    (duration: number): Promise<void>
} = dual(1, (duration: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, Math.max(duration, 0)))
})
