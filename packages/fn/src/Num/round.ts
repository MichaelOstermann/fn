import { dfdlT } from "../dfdlT"

/**
 * # round
 *
 * ```ts
 * function Num.round(target: number): number
 * ```
 *
 * Returns `target` rounded to the nearest integer.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.round(4.3); // 4
 * Num.round(4.7); // 5
 * Num.round(-4.3); // -4
 * Num.round(-4.7); // -5
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(4.3, Num.round()); // 4
 * pipe(4.7, Num.round()); // 5
 * pipe(-4.3, Num.round()); // -4
 * pipe(-4.7, Num.round()); // -5
 * ```
 *
 */
export const round: {
    (): (target: number) => number
    (target: number): number
} = dfdlT((target: number): number => {
    return Math.round(target)
}, 1)
