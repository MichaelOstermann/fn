import { dfdlT } from "../dfdlT"

/**
 * # min
 *
 * ```ts
 * function Num.min(target: number, source: number): number
 * ```
 *
 * Returns the smaller of `target` and `source`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.min(5, 3); // 3
 * Num.min(2, 7); // 2
 * Num.min(4, 4); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(5, Num.min(3)); // 3
 * pipe(2, Num.min(7)); // 2
 * pipe(4, Num.min(4)); // 4
 * ```
 *
 */
export const min: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return Math.min(a, b)
}, 2)
