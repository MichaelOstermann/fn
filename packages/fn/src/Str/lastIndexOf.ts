import { dfdlT } from "../dfdl/dfdlT"

/**
 * # lastIndexOf
 *
 * ```ts
 * function Str.lastIndexOf(target: string, source: string): number
 * ```
 *
 * Returns the index of the last occurrence of `source` string in `target` string, or -1 if not found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.lastIndexOf("hello world hello", "hello"); // 12
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world hello", Str.lastIndexOf("hello")); // 12
 * ```
 *
 */
export const lastIndexOf: {
    (source: string): (target: string) => number
    (target: string, source: string): number
} = dfdlT((a: string, b: string): number => {
    return a.lastIndexOf(b)
}, 2)
