import { dfdlT } from "../dfdl/dfdlT"

/**
 * # intOrThrow
 *
 * ```ts
 * function Num.intOrThrow<T>(target: T): Extract<T, number>
 * ```
 *
 * Returns the numeric value of `target` if it's an integer, otherwise throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.intOrThrow(42); // 42
 * Num.intOrThrow(-7); // -7
 * Num.intOrThrow(0); // 0
 * Num.intOrThrow(3.14); // throws Error
 * Num.intOrThrow(NaN); // throws Error
 * Num.intOrThrow(Infinity); // throws Error
 * Num.intOrThrow("hello"); // throws Error
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(42, Num.intOrThrow()); // 42
 * pipe(-7, Num.intOrThrow()); // -7
 * pipe(0, Num.intOrThrow()); // 0
 * pipe(3.14, Num.intOrThrow()); // throws Error
 * pipe(NaN, Num.intOrThrow()); // throws Error
 * pipe(Infinity, Num.intOrThrow()); // throws Error
 * pipe("hello", Num.intOrThrow()); // throws Error
 * ```
 *
 */
export const intOrThrow: {
    (): <T>(target: T) => Extract<T, number>
    <T>(target: T): Extract<T, number>
} = dfdlT(<T>(target: T): Extract<T, number> => {
    if (Number.isInteger(target)) return target as Extract<T, number>
    throw new Error("Number.intOrThrow: Value is not an integer.")
}, 1)
