import { dfdlT } from "../dfdl/dfdlT"

/**
 * # gt
 *
 * ```ts
 * function Num.gt(target: number, source: number): boolean
 * ```
 *
 * Returns `true` if `target` is greater than `source`, otherwise `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.gt(5, 3); // true
 * Num.gt(2, 7); // false
 * Num.gt(4, 4); // false
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(5, Num.gt(3)); // true
 * pipe(2, Num.gt(7)); // false
 * pipe(4, Num.gt(4)); // false
 * ```
 *
 */
export const gt: {
    (source: number): (target: number) => boolean
    (target: number, source: number): boolean
} = dfdlT((a: number, b: number): boolean => {
    return a > b
}, 2)
