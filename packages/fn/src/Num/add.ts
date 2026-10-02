import { dfdlT } from "../dfdl/dfdlT"

/**
 * # add
 *
 * ```ts
 * function Num.add(target: number, source: number): number
 * ```
 *
 * Adds `source` to `target` and returns the result.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.add(5, 3); // 8
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(5, Num.add(3)); // 8
 * ```
 *
 */
export const add: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return a + b
}, 2)
