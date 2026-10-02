import { dfdlT } from "../dfdl/dfdlT"

/**
 * # medianOr
 *
 * ```ts
 * function Arr.medianOr(
 *     target: readonly number[],
 *     or: number,
 * ): number
 * ```
 *
 * Returns the median value of the number `array`, or `fallback` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.medianOr([1, 2, 3, 4, 5], 0); // 3
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 4, 5], Arr.medianOr(0)); // 3
 * ```
 *
 */
export const medianOr: {
    (or: number): (target: readonly number[]) => number
    (target: readonly number[], or: number): number
} = dfdlT((target: readonly number[], or: number): number => {
    if (target.length === 0) return or
    const sorted = target.toSorted((a, b) => a - b)
    const mid = Math.floor(sorted.length / 2)
    if (sorted.length % 2 === 0) return (sorted[mid - 1]! + sorted[mid]!) / 2
    else return sorted[mid]!
}, 2)
