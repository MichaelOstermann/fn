import { dfdlT } from "../dfdl/dfdlT"

/**
 * # lte
 *
 * ```ts
 * function Num.lte(target: number, source: number): boolean
 * ```
 *
 * Returns `true` if `target` is less than or equal to `source`, otherwise `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.lte(3, 5); // true
 * Num.lte(7, 2); // false
 * Num.lte(4, 4); // true
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(3, Num.lte(5)); // true
 * pipe(7, Num.lte(2)); // false
 * pipe(4, Num.lte(4)); // true
 * ```
 *
 */
export const lte: {
    (source: number): (target: number) => boolean
    (target: number, source: number): boolean
} = dfdlT((a: number, b: number): boolean => {
    return a <= b
}, 2)
