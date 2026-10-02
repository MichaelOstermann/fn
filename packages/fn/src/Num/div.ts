import { dfdlT } from "../dfdlT"

/**
 * # div
 *
 * ```ts
 * function Num.div(target: number, source: number): number
 * ```
 *
 * Divides `target` by `source` and returns the result.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.div(10, 2); // 5
 * Num.div(15, 3); // 5
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(10, Num.div(2)); // 5
 * pipe(15, Num.div(3)); // 5
 * ```
 *
 */
export const div: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return a / b
}, 2)
