import { dfdlT } from "../dfdl/dfdlT"

/**
 * # indexOfOr
 *
 * ```ts
 * function Str.indexOfOr<T>(
 *     target: string,
 *     source: string,
 *     or: T,
 * ): number | T
 * ```
 *
 * Returns the index of the first occurrence of `source` string in `target` string, or the `or` value if not found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.indexOfOr("hello world", "world", -1); // 6
 * Str.indexOfOr("hello world", "foo", -1); // -1
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.indexOfOr("world", -1)); // 6
 * pipe("hello world", Str.indexOfOr("foo", -1)); // -1
 * ```
 *
 */
export const indexOfOr: {
    <T>(source: string, or: T): (target: string) => number | T
    <T>(target: string, source: string, or: T): number | T
} = dfdlT(<T>(a: string, b: string, or: T): number | T => {
    const idx = a.indexOf(b)
    return Number.isFinite(idx) ? idx : or
}, 3)
