import { dfdlT } from "../dfdlT"

/**
 * # append
 *
 * ```ts
 * function Str.append(
 *     target: string,
 *     source: Iterable<string>,
 * ): string
 * ```
 *
 * Appends `source` or strings from `source` iterable to the end of `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.append("hello", " world"); // "hello world"
 * Str.append("hello", [" ", "world"]); // "hello world"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello", Str.append(" world")); // "hello world"
 * pipe("hello", Str.append([" ", "world"])); // "hello world"
 * ```
 *
 */
export const append: {
    (source: Iterable<string>): (target: string) => string
    (target: string, source: Iterable<string>): string
} = dfdlT((a: string, b: Iterable<string>): string => {
    return a + (typeof b === "string" ? b : Array.from(b).join(""))
}, 2)
