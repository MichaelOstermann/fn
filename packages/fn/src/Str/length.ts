import { dfdlT } from "../dfdl/dfdlT"

/**
 * # length
 *
 * ```ts
 * function Str.length(target: string): number
 * ```
 *
 * Returns the length of `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.length("hello world"); // 11
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.length()); // 11
 * ```
 *
 */
export const length: {
    (): (target: string) => number
    (target: string): number
} = dfdlT((target: string): number => {
    return target.length
}, 1)
