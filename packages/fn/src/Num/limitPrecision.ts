import { dfdlT } from "../dfdl/dfdlT"

/**
 * # limitPrecision
 *
 * ```ts
 * function Num.limitPrecision(
 *     target: number,
 *     precision: number,
 * ): number
 * ```
 *
 * Rounds `target` to the specified number of decimal places defined by `precision`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.limitPrecision(3.14159, 2); // 3.14
 * Num.limitPrecision(2.7182818, 3); // 2.718
 * Num.limitPrecision(123.456, 0); // 123
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(3.14159, Num.limitPrecision(2)); // 3.14
 * pipe(2.7182818, Num.limitPrecision(3)); // 2.718
 * pipe(123.456, Num.limitPrecision(0)); // 123
 * ```
 *
 */
export const limitPrecision: {
    (precision: number): (target: number) => number
    (target: number, precision: number): number
} = dfdlT((target: number, precision: number): number => {
    precision = 10 ** precision
    return Math.round(target * precision) / precision
}, 2)
