import { dfdlT } from "../dfdl/dfdlT"

/**
 * # max
 *
 * ```ts
 * function Num.max(target: number, source: number): number
 * ```
 *
 * Returns the larger of `target` and `source`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.max(5, 3); // 5
 * Num.max(2, 7); // 7
 * Num.max(4, 4); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(5, Num.max(3)); // 5
 * pipe(2, Num.max(7)); // 7
 * pipe(4, Num.max(4)); // 4
 * ```
 *
 */
export const max: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return Math.max(a, b)
}, 2)
