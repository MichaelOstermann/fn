import type { IsFloat } from "type-fest"
import { dual } from "@monstermann/dfdl"

type Float<T> = T extends unknown
    ? number extends T
        ? T
        : IsFloat<T> extends true
            ? T
            : never
    : never

/**
 * `isFloat(value)`
 *
 * Returns `true` if `value` is a finite floating-point number (not an integer), otherwise `false`. This function acts as a type guard.
 *
 * ```ts
 * isFloat(3.14); // true
 * isFloat(0.5); // true
 * isFloat(42); // false
 * isFloat(NaN); // false
 * isFloat(Infinity); // false
 * ```
 *
 * ```ts
 * pipe(3.14, isFloat()); // true
 * pipe(0.5, isFloat()); // true
 * pipe(42, isFloat()); // false
 * pipe(NaN, isFloat()); // false
 * pipe(Infinity, isFloat()); // false
 * ```
 */
export const isFloat: {
    <T>(): (value: T) => value is Float<T>
    <T>(value: T): value is Float<T>
} = dual(1, <T>(value: T): value is Float<T> => {
    return Number.isFinite(value)
        && !Number.isInteger(value)
})
