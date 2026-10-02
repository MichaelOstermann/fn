import { dfdlT } from "../dfdlT"

/**
 * # hasAll
 *
 * ```ts
 * function Str.hasAll(
 *     target: string,
 *     source: Iterable<string>,
 * ): boolean
 * ```
 *
 * Checks if `target` string contains all strings from the `source` iterable.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.hasAll("hello world", ["hello", "world"]); // true
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.hasAll(["hello", "world"])); // true
 * ```
 *
 */
export const hasAll: {
    (source: Iterable<string>): (target: string) => boolean
    (target: string, source: Iterable<string>): boolean
} = dfdlT((target: string, source: Iterable<string>): boolean => {
    for (const value of source) {
        if (!target.includes(value)) return false
    }
    return true
}, 2)
