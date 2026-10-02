import { dfdlT } from "../dfdlT"

/**
 * # lt
 *
 * ```ts
 * function Num.lt(target: number, source: number): boolean
 * ```
 *
 * Returns `true` if `target` is less than `source`, otherwise `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.lt(3, 5); // true
 * Num.lt(7, 2); // false
 * Num.lt(4, 4); // false
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(3, Num.lt(5)); // true
 * pipe(7, Num.lt(2)); // false
 * pipe(4, Num.lt(4)); // false
 * ```
 *
 */
export const lt: {
    (source: number): (target: number) => boolean
    (target: number, source: number): boolean
} = dfdlT((a: number, b: number): boolean => {
    return a < b
}, 2)
