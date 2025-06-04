import { dual } from "@monstermann/dfdl"

/**
 * `minOr(array, fallback)`
 *
 * Returns the minimum value in the number `array`, or `fallback` if the array is empty.
 *
 * ```ts
 * minOr([5, 1, 3, 2], 0); // 1
 * ```
 *
 * ```ts
 * pipe([5, 1, 3, 2], minOr(0)); // 1
 * ```
 */
export const minOr: {
    <T>(or: T): (target: readonly number[]) => number | T
    <T>(target: readonly number[], or: T): number | T
} = dual(2, <T>(target: readonly number[], or: T): number | T => {
    if (target.length === 0) return or
    return target.reduce((a, b) => Math.min(a, b), Infinity)
})
