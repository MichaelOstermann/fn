import { dfdlT } from "../dfdlT"

/**
 * # toFixed
 *
 * ```ts
 * function Num.toFixed(target: number, length: number): string
 * ```
 *
 * Returns a string representation of `target` formatted with exactly `length` digits after the decimal point.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.toFixed(3.14159, 2); // "3.14"
 * Num.toFixed(42, 3); // "42.000"
 * Num.toFixed(1.005, 2); // "1.01"
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(3.14159, Num.toFixed(2)); // "3.14"
 * pipe(42, Num.toFixed(3)); // "42.000"
 * pipe(1.005, Num.toFixed(2)); // "1.01"
 * ```
 *
 */
export const toFixed: {
    (length: number): (target: number) => string
    (target: number, length: number): string
} = dfdlT((target: number, length: number): string => {
    return target.toFixed(length)
}, 2)
