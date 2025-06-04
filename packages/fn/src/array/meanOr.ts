import { dual } from "@monstermann/dfdl"

/**
 * `meanOr(array, fallback)`
 *
 * Returns the mean (average) value of the number `array`, or `fallback` if the array is empty.
 *
 * ```ts
 * meanOr([1, 2, 3, 4], 0); // 2.5
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4], meanOr(0)); // 2.5
 * ```
 */
export const meanOr: {
    (or: number): (target: readonly number[]) => number
    (target: readonly number[], or: number): number
} = dual(2, (target: readonly number[], or: number): number => {
    if (target.length === 0) return or
    return target.reduce((acc, val) => acc + val, 0) / target.length
})
