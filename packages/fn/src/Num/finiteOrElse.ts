import { dfdlT } from "../dfdlT"

/**
 * # finiteOrElse
 *
 * ```ts
 * function Num.finiteOrElse<T, U>(
 *     target: T,
 *     orElse: (value: NoInfer<T>) => U,
 * ): Extract<T, number> | U
 * ```
 *
 * Returns the numeric value of `target` if it's a finite number, otherwise calls the `orElse` function with the original value and returns its result.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.finiteOrElse(42, () => 0); // 42
 * Num.finiteOrElse(3.14, () => 0); // 3.14
 * Num.finiteOrElse(-7, () => 0); // -7
 * Num.finiteOrElse(NaN, () => 0); // 0
 * Num.finiteOrElse(Infinity, (val) => 100); // 100
 * Num.finiteOrElse("hello", (val) => val.length); // 5
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(
 *     42,
 *     Num.finiteOrElse(() => 0),
 * ); // 42
 *
 * pipe(
 *     3.14,
 *     Num.finiteOrElse(() => 0),
 * ); // 3.14
 *
 * pipe(
 *     -7,
 *     Num.finiteOrElse(() => 0),
 * ); // -7
 *
 * pipe(
 *     NaN,
 *     Num.finiteOrElse(() => 0),
 * ); // 0
 *
 * pipe(
 *     Infinity,
 *     Num.finiteOrElse((val) => 100),
 * ); // 100
 *
 * pipe(
 *     "hello",
 *     Num.finiteOrElse((val) => val.length),
 * ); // 5
 * ```
 *
 */
export const finiteOrElse: {
    <T, U>(orElse: (value: NoInfer<T>) => U): (target: T) => Extract<T, number> | U
    <T, U>(target: T, orElse: (value: NoInfer<T>) => U): Extract<T, number> | U
} = dfdlT(<T, U>(target: T, orElse: (value: NoInfer<T>) => U): Extract<T, number> | U => {
    return Number.isFinite(target)
        ? target as Extract<T, number>
        : orElse(target)
}, 2)
