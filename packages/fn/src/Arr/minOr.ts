import { dfdlT } from "../dfdl/dfdlT"

/**
 * # minOr
 *
 * ```ts
 * function Arr.minOr<T>(
 *     target: readonly number[],
 *     or: T,
 * ): number | T
 * ```
 *
 * Returns the minimum value in the number `array`, or `fallback` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.minOr([5, 1, 3, 2], 0); // 1
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([5, 1, 3, 2], Arr.minOr(0)); // 1
 * ```
 *
 */
export const minOr: {
    <T>(or: T): (target: readonly number[]) => number | T
    <T>(target: readonly number[], or: T): number | T
} = dfdlT(<T>(target: readonly number[], or: T): number | T => {
    if (target.length === 0) return or
    return target.reduce((a, b) => Math.min(a, b), Infinity)
}, 2)
