import { dfdlT } from "../dfdlT"

/**
 * # indexOfOrThrow
 *
 * ```ts
 * function Str.indexOfOrThrow(
 *     target: string,
 *     source: string,
 * ): number
 * ```
 *
 * Returns the index of the first occurrence of `source` string in `target` string, or throws an error if not found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.indexOfOrThrow("hello world", "world"); // 6
 * Str.indexOfOrThrow("hello world", "foo"); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.indexOfOrThrow("world")); // 6
 * pipe("hello world", Str.indexOfOrThrow("foo")); // throws FnError
 * ```
 *
 */
export const indexOfOrThrow: {
    (source: string): (target: string) => number
    (target: string, source: string): number
} = dfdlT((a: string, b: string): number => {
    const idx = a.indexOf(b)
    if (idx >= 0) return idx
    throw new Error("String.indexOfOrThrow: Value not found.")
}, 2)
