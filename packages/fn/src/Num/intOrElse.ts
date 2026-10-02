import { dfdlT } from "../dfdlT"

/**
 * # intOrElse
 *
 * ```ts
 * function Num.intOrElse<T, U>(
 *     target: T,
 *     orElse: (value: NoInfer<T>) => U,
 * ): Extract<T, number> | U
 * ```
 *
 * Returns the numeric value of `target` if it's an integer, otherwise calls the `orElse` function with the original value and returns its result.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.intOrElse(42, () => 0); // 42
 * Num.intOrElse(-7, () => 0); // -7
 * Num.intOrElse(3.14, () => 0); // 0
 * Num.intOrElse(NaN, () => 0); // 0
 * Num.intOrElse(Infinity, (val) => 100); // 100
 * Num.intOrElse("hello", (val) => val.length); // 5
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(
 *     42,
 *     Num.intOrElse(() => 0),
 * ); // 42
 *
 * pipe(
 *     -7,
 *     Num.intOrElse(() => 0),
 * ); // -7
 *
 * pipe(
 *     3.14,
 *     Num.intOrElse(() => 0),
 * ); // 0
 *
 * pipe(
 *     NaN,
 *     Num.intOrElse(() => 0),
 * ); // 0
 *
 * pipe(
 *     Infinity,
 *     Num.intOrElse((val) => 100),
 * ); // 100
 *
 * pipe(
 *     "hello",
 *     Num.intOrElse((val) => val.length),
 * ); // 5
 * ```
 *
 */
export const intOrElse: {
    <T, U>(orElse: (value: NoInfer<T>) => U): (target: T) => Extract<T, number> | U
    <T, U>(target: T, orElse: (value: NoInfer<T>) => U): Extract<T, number> | U
} = dfdlT(<T, U>(target: T, orElse: (value: NoInfer<T>) => U): Extract<T, number> | U => {
    return Number.isInteger(target)
        ? target as Extract<T, number>
        : orElse(target)
}, 2)
