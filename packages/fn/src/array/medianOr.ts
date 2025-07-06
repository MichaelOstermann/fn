import { dfdlT } from "@monstermann/dfdl"

/**
 * `medianOr(array, fallback)`
 *
 * Returns the median value of the number `array`, or `fallback` if the array is empty.
 *
 * ```ts
 * medianOr([1, 2, 3, 4, 5], 0); // 3
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4, 5], medianOr(0)); // 3
 * ```
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
