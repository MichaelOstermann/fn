import { dfdlT } from "../dfdlT"

/**
 * # finiteOr
 *
 * ```ts
 * function Num.finiteOr<T, U>(
 *     target: T,
 *     or: U,
 * ): Extract<T, number> | U
 * ```
 *
 * Returns the numeric value of `target` if it's a finite number, otherwise returns the fallback value `or`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.finiteOr(42, 0); // 42
 * Num.finiteOr(3.14, 0); // 3.14
 * Num.finiteOr(-7, 0); // -7
 * Num.finiteOr(NaN, 0); // 0
 * Num.finiteOr(Infinity, 0); // 0
 * Num.finiteOr("hello", 0); // 0
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(42, Num.finiteOr(0)); // 42
 * pipe(3.14, Num.finiteOr(0)); // 3.14
 * pipe(-7, Num.finiteOr(0)); // -7
 * pipe(NaN, Num.finiteOr(0)); // 0
 * pipe(Infinity, Num.finiteOr(0)); // 0
 * pipe("hello", Num.finiteOr(0)); // 0
 * ```
 *
 */
export const finiteOr: {
    <U>(or: U): <T>(target: T) => Extract<T, number> | U
    <T, U>(target: T, or: U): Extract<T, number> | U
} = dfdlT(<T, U>(target: T, or: U): Extract<T, number> | U => {
    return Number.isFinite(target)
        ? target as Extract<T, number>
        : or
}, 2)
