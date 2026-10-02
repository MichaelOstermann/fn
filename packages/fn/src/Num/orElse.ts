import { dfdlT } from "../dfdl/dfdlT"

/**
 * # orElse
 *
 * ```ts
 * function Num.orElse<T, U>(
 *     target: T,
 *     orElse: (value: Exclude<T, number>) => U,
 * ): Extract<T, number> | U
 * ```
 *
 * Returns the numeric value of `target` if it's a number, otherwise calls the `orElse` function with the original value and returns its result.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.orElse(42, () => 0); // 42
 * Num.orElse(NaN, () => 0); // NaN
 * Num.orElse(Infinity, (val) => 100); // Infinity
 * Num.orElse("hello", (val) => val.length); // 5
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(
 *     42,
 *     Num.orElse(() => 0),
 * ); // 42
 *
 * pipe(
 *     NaN,
 *     Num.orElse(() => 0),
 * ); // NaN
 *
 * pipe(
 *     Infinity,
 *     Num.orElse((val) => 100),
 * ); // Infinity
 *
 * pipe(
 *     "hello",
 *     Num.orElse((val) => val.length),
 * ); // 5
 * ```
 *
 */
export const orElse: {
    <T, U>(orElse: (value: Exclude<T, number>) => U): (target: T) => Extract<T, number> | U
    <T, U>(target: T, orElse: (value: Exclude<T, number>) => U): Extract<T, number> | U
} = dfdlT(<T, U>(target: T, orElse: (value: Exclude<T, number>) => U): Extract<T, number> | U => {
    return typeof target === "number"
        ? target as Extract<T, number>
        : orElse(target as Exclude<T, number>)
}, 2)
