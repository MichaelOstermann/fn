import { dfdlT } from "../dfdl/dfdlT"

/**
 * # isInt
 *
 * ```ts
 * function Num.isInt(target: number): boolean
 * ```
 *
 * Returns `true` if `target` is an integer, otherwise `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.isInt(42); // true
 * Num.isInt(-7); // true
 * Num.isInt(0); // true
 * Num.isInt(3.14); // false
 * Num.isInt(NaN); // false
 * Num.isInt(Infinity); // false
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(42, Num.isInt()); // true
 * pipe(-7, Num.isInt()); // true
 * pipe(0, Num.isInt()); // true
 * pipe(3.14, Num.isInt()); // false
 * pipe(NaN, Num.isInt()); // false
 * pipe(Infinity, Num.isInt()); // false
 * ```
 *
 */
export const isInt: {
    (): (target: number) => boolean
    (target: number): boolean
} = dfdlT((target: number): boolean => {
    return Number.isInteger(target)
}, 1)
