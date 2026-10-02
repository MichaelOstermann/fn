import { dfdlT } from "../dfdl/dfdlT"

/**
 * # mul
 *
 * ```ts
 * function Num.mul(target: number, source: number): number
 * ```
 *
 * Multiplies `target` by `source` and returns the result.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.mul(5, 3); // 15
 * Num.mul(7, 2); // 14
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(5, Num.mul(3)); // 15
 * pipe(7, Num.mul(2)); // 14
 * ```
 *
 */
export const mul: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return a * b
}, 2)
