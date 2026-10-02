import { dfdlT } from "../dfdlT"

/**
 * # exp
 *
 * ```ts
 * function Num.exp(target: number, source: number): number
 * ```
 *
 * Raises `target` to the power of `source` and returns the result.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.exp(2, 3); // 8
 * Num.exp(5, 2); // 25
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(2, Num.exp(3)); // 8
 * pipe(5, Num.exp(2)); // 25
 * ```
 *
 */
export const exp: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return a ** b
}, 2)
