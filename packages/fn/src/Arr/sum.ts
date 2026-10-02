import { dfdlT } from "../dfdl/dfdlT"

/**
 * # sum
 *
 * ```ts
 * function Arr.sum(target: readonly number[]): number
 * ```
 *
 * Returns the sum of all numbers in `array`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.sum([1, 2, 3, 4]); // 10
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 4], Arr.sum()); // 10
 * ```
 *
 */
export const sum: {
    (): (target: readonly number[]) => number
    (target: readonly number[]): number
} = dfdlT((target: readonly number[]): number => {
    return target.reduce((a, b) => a + b, 0)
}, 1)
