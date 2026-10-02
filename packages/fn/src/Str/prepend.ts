import { dfdlT } from "../dfdlT"

/**
 * # prepend
 *
 * ```ts
 * function Str.prepend(
 *     target: string,
 *     source: Iterable<string>,
 * ): string
 * ```
 *
 * Prepends `string` or strings from `source` iterable to the beginning of `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.prepend("world", "hello "); // "hello world"
 * Str.prepend("world", ["hello", " "]); // "hello world"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("world", Str.prepend("hello ")); // "hello world"
 * pipe("world", Str.prepend(["hello", " "])); // "hello world"
 * ```
 *
 */
export const prepend: {
    (source: Iterable<string>): (target: string) => string
    (target: string, source: Iterable<string>): string
} = dfdlT((a: string, b: Iterable<string>): string => {
    return (typeof b === "string" ? b : Array.from(b).join("")) + a
}, 2)
