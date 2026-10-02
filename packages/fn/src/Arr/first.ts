import { dfdlT } from "../dfdl/dfdlT"

/**
 * # first
 *
 * ```ts
 * function Arr.first<T>(target: readonly T[]): T | undefined
 * ```
 *
 * Returns the first element of `array`, or `undefined` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.first([1, 2, 3, 4]); // 1
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 4], Arr.first()); // 1
 * ```
 *
 */
export const first: {
    (): <T>(target: readonly T[]) => T | undefined
    <T>(target: readonly T[]): T | undefined
} = dfdlT(<T>(target: readonly T[]): T | undefined => {
    return target[0]
}, 1)
