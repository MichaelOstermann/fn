import { dfdlT } from "../dfdlT"

/**
 * # meanOr
 *
 * ```ts
 * function Arr.meanOr(
 *     target: readonly number[],
 *     or: number,
 * ): number
 * ```
 *
 * Returns the mean (average) value of the number `array`, or `fallback` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.meanOr([1, 2, 3, 4], 0); // 2.5
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 4], Arr.meanOr(0)); // 2.5
 * ```
 *
 */
export const meanOr: {
    (or: number): (target: readonly number[]) => number
    (target: readonly number[], or: number): number
} = dfdlT((target: readonly number[], or: number): number => {
    if (target.length === 0) return or
    return target.reduce((acc, val) => acc + val, 0) / target.length
}, 2)
