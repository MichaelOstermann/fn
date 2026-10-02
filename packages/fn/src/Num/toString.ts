import { dfdlT } from "../dfdl/dfdlT"

/**
 * # toString
 *
 * ```ts
 * function Num.toString(target: number): string
 * ```
 *
 * Converts `target` to a string representation.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.toString(42); // "42"
 * Num.toString(3.14); // "3.14"
 * Num.toString(NaN); // "NaN"
 * Num.toString(Infinity); // "Infinity"
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(42, Num.toString()); // "42"
 * pipe(3.14, Num.toString()); // "3.14"
 * pipe(NaN, Num.toString()); // "NaN"
 * pipe(Infinity, Num.toString()); // "Infinity"
 * ```
 *
 */
export const toString: {
    (): (target: number) => string
    (target: number): string
} = dfdlT((target: number): string => {
    return String(target)
}, 1)
