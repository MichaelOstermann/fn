import { dfdlT } from "@monstermann/dfdl"

/**
 * `random(array)`
 *
 * Returns a random element from `array`, or `undefined` if the array is empty.
 *
 * ```ts
 * random([1, 2, 3, 4]); // 2 (random)
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4], random()); // 2 (random)
 * ```
 */
export const random: {
    (): <T>(target: readonly T[]) => T | undefined
    <T>(target: readonly T[]): T | undefined
} = dfdlT(<T>(target: readonly T[]): T | undefined => {
    const idx = Math.floor(Math.random() * target.length)
    return target[idx]
}, 1)
