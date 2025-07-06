import { dfdlT } from "@monstermann/dfdl"

/**
 * `sum(array)`
 *
 * Returns the sum of all numbers in `array`.
 *
 * ```ts
 * sum([1, 2, 3, 4]); // 10
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4], sum()); // 10
 * ```
 */
export const sum: {
    (): (target: readonly number[]) => number
    (target: readonly number[]): number
} = dfdlT((target: readonly number[]): number => {
    return target.reduce((a, b) => a + b, 0)
}, 1)
