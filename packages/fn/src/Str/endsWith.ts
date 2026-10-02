import { dfdlT } from "../dfdlT"

/**
 * # endsWith
 *
 * ```ts
 * function Str.endsWith(target: string, source: string): boolean
 * ```
 *
 * Checks if `target` string ends with `source` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.endsWith("hello world", "world"); // true
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.endsWith("world")); // true
 * ```
 *
 */
export const endsWith: {
    (source: string): (target: string) => boolean
    (target: string, source: string): boolean
} = dfdlT((a: string, b: string): boolean => {
    return a.endsWith(b)
}, 2)
