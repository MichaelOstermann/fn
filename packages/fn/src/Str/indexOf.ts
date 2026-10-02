import { dfdlT } from "../dfdl/dfdlT"

/**
 * # indexOf
 *
 * ```ts
 * function Str.indexOf(target: string, source: string): number
 * ```
 *
 * Returns the index of the first occurrence of `source` string in `target` string, or -1 if not found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.indexOf("hello world", "world"); // 6
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.indexOf("world")); // 6
 * ```
 *
 */
export const indexOf: {
    (source: string): (target: string) => number
    (target: string, source: string): number
} = dfdlT((a: string, b: string): number => {
    return a.indexOf(b)
}, 2)
