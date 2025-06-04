import { dual } from "@monstermann/dfdl"

/**
 * `toString(target)`
 *
 * Converts `target` to a string representation.
 *
 * ```ts
 * toString(42); // "42"
 * toString(3.14); // "3.14"
 * toString(NaN); // "NaN"
 * toString(Infinity); // "Infinity"
 * ```
 *
 * ```ts
 * pipe(42, toString()); // "42"
 * pipe(3.14, toString()); // "3.14"
 * pipe(NaN, toString()); // "NaN"
 * pipe(Infinity, toString()); // "Infinity"
 * ```
 */
export const toString: {
    (): (target: number) => string
    (target: number): string
} = dual(1, (target: number): string => {
    return String(target)
})
