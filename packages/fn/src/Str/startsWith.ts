import { dfdlT } from "../dfdlT"

/**
 * # startsWith
 *
 * ```ts
 * function Str.startsWith(target: string, source: string): boolean
 * ```
 *
 * Checks if `target` string starts with `source` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.startsWith("hello world", "hello"); // true
 * Str.startsWith("hello world", "world"); // false
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.startsWith("hello")); // true
 * pipe("hello world", Str.startsWith("world")); // false
 * ```
 *
 */
export const startsWith: {
    (source: string): (target: string) => boolean
    (target: string, source: string): boolean
} = dfdlT((a: string, b: string): boolean => {
    return a.startsWith(b)
}, 2)
