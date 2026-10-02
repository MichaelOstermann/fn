import { dfdlT } from "../dfdlT"

/**
 * # floor
 *
 * ```ts
 * function Num.floor(target: number): number
 * ```
 *
 * Returns the largest integer less than or equal to `target`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.floor(4.7); // 4
 * Num.floor(-4.3); // -5
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(4.7, Num.floor()); // 4
 * pipe(-4.3, Num.floor()); // -5
 * ```
 *
 */
export const floor: {
    (): (target: number) => number
    (target: number): number
} = dfdlT((target: number): number => {
    return Math.floor(target)
}, 1)
