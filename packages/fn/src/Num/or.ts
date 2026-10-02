import { dfdlT } from "../dfdlT"

/**
 * # or
 *
 * ```ts
 * function Num.or<T, U>(target: T, or: U): Extract<T, number> | U
 * ```
 *
 * Returns the numeric value of `target` if it's a number, otherwise returns the fallback value `or`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.or(42, 0); // 42
 * Num.or(NaN, 0); // NaN
 * Num.or(Infinity, 0); // Infinity
 * Num.or("hello", 0); // 0
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(42, Num.or(0)); // 42
 * pipe(NaN, Num.or(0)); // NaN
 * pipe(Infinity, Num.or(0)); // Infinity
 * pipe("hello", Num.or(0)); // 0
 * ```
 *
 */
export const or: {
    <U>(or: U): <T>(target: T) => Extract<T, number> | U
    <T, U>(target: T, or: U): Extract<T, number> | U
} = dfdlT(<T, U>(target: T, or: U): Extract<T, number> | U => {
    return typeof target === "number"
        ? target as Extract<T, number>
        : or
}, 2)
