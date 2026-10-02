import { dfdlT } from "../dfdlT"

/**
 * # length
 *
 * ```ts
 * function Arr.length<T>(target: readonly T[]): number
 * ```
 *
 * Returns the number of elements in `array`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.length([1, 2, 3, 4]); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 4], Arr.length()); // 4
 * ```
 *
 */
export const length: {
    (): <T>(target: readonly T[]) => number
    <T>(target: readonly T[]): number
} = dfdlT(<T>(target: readonly T[]): number => {
    return target.length
}, 1)
