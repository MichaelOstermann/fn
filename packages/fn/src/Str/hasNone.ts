import { dfdlT } from "../dfdlT"

/**
 * # hasNone
 *
 * ```ts
 * function Str.hasNone(
 *     target: string,
 *     source: Iterable<string>,
 * ): boolean
 * ```
 *
 * Checks if `target` string contains none of the strings from the `source` iterable.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.hasNone("hello world", ["foo", "bar"]); // true
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.hasNone(["foo", "bar"])); // true
 * ```
 *
 */
export const hasNone: {
    (source: Iterable<string>): (target: string) => boolean
    (target: string, source: Iterable<string>): boolean
} = dfdlT((target: string, source: Iterable<string>): boolean => {
    for (const value of source) {
        if (target.includes(value)) return false
    }
    return true
}, 2)
