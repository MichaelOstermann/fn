import { dfdlT } from "../dfdlT"

/**
 * # lastIndexOfOr
 *
 * ```ts
 * function Str.lastIndexOfOr<T>(
 *     target: string,
 *     source: string,
 *     or: T,
 * ): number | T
 * ```
 *
 * Returns the index of the last occurrence of `source` string in `target` string, or the `or` value if not found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.lastIndexOfOr("hello world hello", "hello", -1); // 12
 * Str.lastIndexOfOr("hello world", "foo", -1); // -1
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world hello", Str.lastIndexOfOr("hello", -1)); // 12
 * pipe("hello world", Str.lastIndexOfOr("foo", -1)); // -1
 * ```
 *
 */
export const lastIndexOfOr: {
    <T>(source: string, or: T): (target: string) => number | T
    <T>(target: string, source: string, or: T): number | T
} = dfdlT(<T>(a: string, b: string, or: T): number | T => {
    const idx = a.lastIndexOf(b)
    return idx >= 0 ? idx : or
}, 3)
