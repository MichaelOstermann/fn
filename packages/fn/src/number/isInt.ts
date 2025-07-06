import type { IsInteger } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"

type Int<T> = T extends unknown
    ? number extends T
        ? T
        : IsInteger<T> extends true
            ? T
            : never
    : never

/**
 * `isInt(value)`
 *
 * Returns `true` if `value` is an integer, otherwise `false`. This function acts as a type guard.
 *
 * ```ts
 * isInt(42); // true
 * isInt(-7); // true
 * isInt(0); // true
 * isInt(3.14); // false
 * isInt(NaN); // false
 * isInt(Infinity); // false
 * ```
 *
 * ```ts
 * pipe(42, isInt()); // true
 * pipe(-7, isInt()); // true
 * pipe(0, isInt()); // true
 * pipe(3.14, isInt()); // false
 * pipe(NaN, isInt()); // false
 * pipe(Infinity, isInt()); // false
 * ```
 */
export const isInt: {
    <T>(): (value: T) => value is Int<T>
    <T>(value: T): value is Int<T>
} = dfdlT(<T>(value: T): value is Int<T> => {
    return Number.isInteger(value)
}, 1)
