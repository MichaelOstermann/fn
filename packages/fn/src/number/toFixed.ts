import { dfdlT } from "@monstermann/dfdl"

/**
 * `toFixed(target, length)`
 *
 * Returns a string representation of `target` formatted with exactly `length` digits after the decimal point.
 *
 * ```ts
 * toFixed(3.14159, 2); // "3.14"
 * toFixed(42, 3); // "42.000"
 * toFixed(1.005, 2); // "1.01"
 * ```
 *
 * ```ts
 * pipe(3.14159, toFixed(2)); // "3.14"
 * pipe(42, toFixed(3)); // "42.000"
 * pipe(1.005, toFixed(2)); // "1.01"
 * ```
 */
export const toFixed: {
    (length: number): (target: number) => string
    (target: number, length: number): string
} = dfdlT((target: number, length: number): string => {
    return target.toFixed(length)
}, 2)
