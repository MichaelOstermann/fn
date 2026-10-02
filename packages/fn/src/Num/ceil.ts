import { dfdlT } from "../dfdlT"

/**
 * # ceil
 *
 * ```ts
 * function Num.ceil(target: number): number
 * ```
 *
 * Returns the smallest integer greater than or equal to `target`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.ceil(4.3); // 5
 * Num.ceil(-4.7); // -4
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(4.3, Num.ceil()); // 5
 * pipe(-4.7, Num.ceil()); // -4
 * ```
 *
 */
export const ceil: {
    (): (target: number) => number
    (target: number): number
} = dfdlT((target: number): number => {
    return Math.ceil(target)
}, 1)
