import { dfdlT } from "../dfdl/dfdlT"

/**
 * # has
 *
 * ```ts
 * function Str.has(target: string, source: string): boolean
 * ```
 *
 * Checks if `target` string contains `source` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.has("hello world", "world"); // true
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.has("world")); // true
 * ```
 *
 */
export const has: {
    (source: string): (target: string) => boolean
    (target: string, source: string): boolean
} = dfdlT((target: string, source: string): boolean => {
    return target.includes(source)
}, 2)
