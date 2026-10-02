import { dfdlT } from "../dfdlT"

/**
 * # sub
 *
 * ```ts
 * function Num.sub(target: number, source: number): number
 * ```
 *
 * Subtracts `source` from `target` and returns the result.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.sub(10, 3); // 7
 * Num.sub(5, 8); // -3
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(10, Num.sub(3)); // 7
 * pipe(5, Num.sub(8)); // -3
 * ```
 *
 */
export const sub: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return a - b
}, 2)
