import { dfdlT } from "../dfdlT"

/**
 * # orThrow
 *
 * ```ts
 * function Num.orThrow<T>(target: T): Extract<T, number>
 * ```
 *
 * Returns the numeric value of `target` if it's a number, otherwise throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.orThrow(42); // 42
 * Num.orThrow(NaN); // NaN
 * Num.orThrow(Infinity); // Infinity
 * Num.orThrow("hello"); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(42, Num.orThrow()); // 42
 * pipe(NaN, Num.orThrow()); // NaN
 * pipe(Infinity, Num.orThrow()); // Infinity
 * pipe("hello", Num.orThrow()); // throws FnError
 * ```
 *
 */
export const orThrow: {
    (): <T>(target: T) => Extract<T, number>
    <T>(target: T): Extract<T, number>
} = dfdlT(<T>(target: T): Extract<T, number> => {
    if (typeof target === "number") return target as Extract<T, number>
    throw new Error("Number.orThrow: Value is not a number.")
}, 1)
