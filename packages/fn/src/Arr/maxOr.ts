import { dfdlT } from "../dfdl/dfdlT"

/**
 * # maxOr
 *
 * ```ts
 * function Arr.maxOr<T>(
 *     target: readonly number[],
 *     or: T,
 * ): number | T
 * ```
 *
 * Returns the maximum value in the number `array`, or `fallback` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.maxOr([1, 3, 2, 5], 0); // 5
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 3, 2, 5], Arr.maxOr(0)); // 5
 * ```
 *
 */
export const maxOr: {
    <T>(or: T): (target: readonly number[]) => number | T
    <T>(target: readonly number[], or: T): number | T
} = dfdlT(<T>(target: readonly number[], or: T): number | T => {
    if (target.length === 0) return or
    return target.reduce((a, b) => Math.max(a, b), 0)
}, 2)
