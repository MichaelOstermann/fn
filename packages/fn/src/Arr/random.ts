import { dfdlT } from "../dfdl/dfdlT"

/**
 * # random
 *
 * ```ts
 * function Arr.random<T>(target: readonly T[]): T | undefined
 * ```
 *
 * Returns a random element from `array`, or `undefined` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.random([1, 2, 3, 4]); // 2 (random)
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 4], Arr.random()); // 2 (random)
 * ```
 *
 */
export const random: {
    (): <T>(target: readonly T[]) => T | undefined
    <T>(target: readonly T[]): T | undefined
} = dfdlT(<T>(target: readonly T[]): T | undefined => {
    const idx = Math.floor(Math.random() * target.length)
    return target[idx]
}, 1)
