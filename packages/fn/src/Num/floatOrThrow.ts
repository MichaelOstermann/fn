import { dfdlT } from "../dfdl/dfdlT"

/**
 * # floatOrThrow
 *
 * ```ts
 * function Num.floatOrThrow<T>(target: T): Extract<T, number>
 * ```
 *
 * Returns the numeric value of `target` if it's a finite floating-point number (not an integer), otherwise throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.floatOrThrow(3.14); // 3.14
 * Num.floatOrThrow(0.5); // 0.5
 * Num.floatOrThrow(42); // throws Error
 * Num.floatOrThrow(NaN); // throws Error
 * Num.floatOrThrow(Infinity); // throws Error
 * Num.floatOrThrow("hello"); // throws Error
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(3.14, Num.floatOrThrow()); // 3.14
 * pipe(0.5, Num.floatOrThrow()); // 0.5
 * pipe(42, Num.floatOrThrow()); // throws Error
 * pipe(NaN, Num.floatOrThrow()); // throws Error
 * pipe(Infinity, Num.floatOrThrow()); // throws Error
 * pipe("hello", Num.floatOrThrow()); // throws Error
 * ```
 *
 */
export const floatOrThrow: {
    (): <T>(target: T) => Extract<T, number>
    <T>(target: T): Extract<T, number>
} = dfdlT(<T>(target: T): Extract<T, number> => {
    if (Number.isFinite(target) && !Number.isInteger(target)) return target as Extract<T, number>
    throw new Error("Number.floatOrThrow: Value is not a floating-point number.")
}, 1)
