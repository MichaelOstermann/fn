import { dfdlT } from "../dfdl/dfdlT"

/**
 * # isFloat
 *
 * ```ts
 * function Num.isFloat(target: number): boolean
 * ```
 *
 * Returns `true` if `target` is a finite floating-point number (not an integer), otherwise `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.isFloat(3.14); // true
 * Num.isFloat(0.5); // true
 * Num.isFloat(42); // false
 * Num.isFloat(NaN); // false
 * Num.isFloat(Infinity); // false
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(3.14, Num.isFloat()); // true
 * pipe(0.5, Num.isFloat()); // true
 * pipe(42, Num.isFloat()); // false
 * pipe(NaN, Num.isFloat()); // false
 * pipe(Infinity, Num.isFloat()); // false
 * ```
 *
 */
export const isFloat: {
    (): (target: number) => boolean
    (target: number): boolean
} = dfdlT((target: number): boolean => {
    return Number.isFinite(target)
        && !Number.isInteger(target)
}, 1)
