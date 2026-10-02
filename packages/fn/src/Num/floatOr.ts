import { dfdlT } from "../dfdl/dfdlT"

/**
 * # floatOr
 *
 * ```ts
 * function Num.floatOr<T, U>(
 *     target: T,
 *     or: U,
 * ): Extract<T, number> | U
 * ```
 *
 * Returns the numeric value of `target` if it's a finite floating-point number (not an integer), otherwise returns the fallback value `or`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.floatOr(3.14, 0); // 3.14
 * Num.floatOr(0.5, 0); // 0.5
 * Num.floatOr(42, 0); // 0
 * Num.floatOr(NaN, 0); // 0
 * Num.floatOr(Infinity, 0); // 0
 * Num.floatOr("hello", 0); // 0
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(3.14, Num.floatOr(0)); // 3.14
 * pipe(0.5, Num.floatOr(0)); // 0.5
 * pipe(42, Num.floatOr(0)); // 0
 * pipe(NaN, Num.floatOr(0)); // 0
 * pipe(Infinity, Num.floatOr(0)); // 0
 * pipe("hello", Num.floatOr(0)); // 0
 * ```
 *
 */
export const floatOr: {
    <U>(or: U): <T>(target: T) => Extract<T, number> | U
    <T, U>(target: T, or: U): Extract<T, number> | U
} = dfdlT(<T, U>(target: T, or: U): Extract<T, number> | U => {
    return Number.isFinite(target) && !Number.isInteger(target)
        ? target as Extract<T, number>
        : or
}, 2)
