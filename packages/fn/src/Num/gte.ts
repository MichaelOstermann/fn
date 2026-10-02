import { dfdlT } from "../dfdl/dfdlT"

/**
 * # gte
 *
 * ```ts
 * function Num.gte(target: number, source: number): boolean
 * ```
 *
 * Returns `true` if `target` is greater than or equal to `source`, otherwise `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.gte(5, 3); // true
 * Num.gte(2, 7); // false
 * Num.gte(4, 4); // true
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(5, Num.gte(3)); // true
 * pipe(2, Num.gte(7)); // false
 * pipe(4, Num.gte(4)); // true
 * ```
 *
 */
export const gte: {
    (source: number): (target: number) => boolean
    (target: number, source: number): boolean
} = dfdlT((a: number, b: number): boolean => {
    return a >= b
}, 2)
