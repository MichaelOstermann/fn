import { dfdlT } from "../dfdl/dfdlT"

/**
 * # last
 *
 * ```ts
 * function Arr.last<T>(target: readonly T[]): T | undefined
 * ```
 *
 * Returns the last element of `array`, or `undefined` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.last([1, 2, 3, 4]); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 4], Arr.last()); // 4
 * ```
 *
 */
export const last: {
    (): <T>(target: readonly T[]) => T | undefined
    <T>(target: readonly T[]): T | undefined
} = dfdlT(<T>(target: readonly T[]): T | undefined => {
    return target.at(-1)
}, 1)
