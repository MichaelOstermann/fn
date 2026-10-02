import { dfdlT } from "../dfdl/dfdlT"

/**
 * # intOr
 *
 * ```ts
 * function Num.intOr<T, U>(
 *     target: T,
 *     or: U,
 * ): Extract<T, number> | U
 * ```
 *
 * Returns the numeric value of `target` if it's an integer, otherwise returns the fallback value `or`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.intOr(42, 0); // 42
 * Num.intOr(-7, 0); // -7
 * Num.intOr(3.14, 0); // 0
 * Num.intOr(NaN, 0); // 0
 * Num.intOr(Infinity, 0); // 0
 * Num.intOr("hello", 0); // 0
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(42, Num.intOr(0)); // 42
 * pipe(-7, Num.intOr(0)); // -7
 * pipe(3.14, Num.intOr(0)); // 0
 * pipe(NaN, Num.intOr(0)); // 0
 * pipe(Infinity, Num.intOr(0)); // 0
 * pipe("hello", Num.intOr(0)); // 0
 * ```
 *
 */
export const intOr: {
    <U>(or: U): <T>(target: T) => Extract<T, number> | U
    <T, U>(target: T, or: U): Extract<T, number> | U
} = dfdlT(<T, U>(target: T, or: U): Extract<T, number> | U => {
    return Number.isInteger(target)
        ? target as Extract<T, number>
        : or
}, 2)
