import { dual } from "@monstermann/dfdl"

/**
 * `maxOr(array, fallback)`
 *
 * Returns the maximum value in the number `array`, or `fallback` if the array is empty.
 *
 * ```ts
 * maxOr([1, 3, 2, 5], 0); // 5
 * ```
 *
 * ```ts
 * pipe([1, 3, 2, 5], maxOr(0)); // 5
 * ```
 */
export const maxOr: {
    <T>(or: T): (target: readonly number[]) => number | T
    <T>(target: readonly number[], or: T): number | T
} = dual(2, <T>(target: readonly number[], or: T): number | T => {
    if (target.length === 0) return or
    return target.reduce((a, b) => Math.max(a, b), 0)
})
