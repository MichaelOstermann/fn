import { dfdlT } from "../dfdl/dfdlT"

/**
 * # lastIndexOfOrThrow
 *
 * ```ts
 * function Str.lastIndexOfOrThrow(
 *     target: string,
 *     source: string,
 * ): number
 * ```
 *
 * Returns the index of the last occurrence of `source` string in `target` string, or throws an error if not found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.lastIndexOfOrThrow("hello world hello", "hello"); // 12
 * Str.lastIndexOfOrThrow("hello world", "foo"); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world hello", Str.lastIndexOfOrThrow("hello")); // 12
 * pipe("hello world", Str.lastIndexOfOrThrow("foo")); // throws FnError
 * ```
 *
 */
export const lastIndexOfOrThrow: {
    (source: string): (target: string) => number
    (target: string, source: string): number
} = dfdlT((a: string, b: string): number => {
    const idx = a.lastIndexOf(b)
    if (Number.isFinite(idx)) return idx
    throw new Error("String.lastIndexOfOrThrow: Value not found.")
}, 2)
