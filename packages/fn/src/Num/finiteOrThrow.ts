import { dfdlT } from "../dfdl/dfdlT"

/**
 * # finiteOrThrow
 *
 * ```ts
 * function Num.finiteOrThrow<T>(target: T): Extract<T, number>
 * ```
 *
 * Returns the numeric value of `target` if it's a finite number, otherwise throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.finiteOrThrow(42); // 42
 * Num.finiteOrThrow(3.14); // 3.14
 * Num.finiteOrThrow(-7); // -7
 * Num.finiteOrThrow(NaN); // throws Error
 * Num.finiteOrThrow(Infinity); // throws Error
 * Num.finiteOrThrow("hello"); // throws Error
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(42, Num.finiteOrThrow()); // 42
 * pipe(3.14, Num.finiteOrThrow()); // 3.14
 * pipe(-7, Num.finiteOrThrow()); // -7
 * pipe(NaN, Num.finiteOrThrow()); // throws Error
 * pipe(Infinity, Num.finiteOrThrow()); // throws Error
 * pipe("hello", Num.finiteOrThrow()); // throws Error
 * ```
 *
 */
export const finiteOrThrow: {
    (): <T>(target: T) => Extract<T, number>
    <T>(target: T): Extract<T, number>
} = dfdlT(<T>(target: T): Extract<T, number> => {
    if (Number.isFinite(target)) return target as Extract<T, number>
    throw new Error("Number.finiteOrThrow: Value is not a finite number.")
}, 1)
