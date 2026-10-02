import { dfdlT } from "../dfdlT"

/**
 * # hasAny
 *
 * ```ts
 * function Str.hasAny(
 *     target: string,
 *     source: Iterable<string>,
 * ): boolean
 * ```
 *
 * Checks if `target` string contains any of the strings from the `source` iterable.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.hasAny("hello world", ["foo", "world"]); // true
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.hasAny(["foo", "world"])); // true
 * ```
 *
 */
export const hasAny: {
    (source: Iterable<string>): (target: string) => boolean
    (target: string, source: Iterable<string>): boolean
} = dfdlT((target: string, source: Iterable<string>): boolean => {
    for (const value of source) {
        if (target.includes(value)) return true
    }
    return false
}, 2)
