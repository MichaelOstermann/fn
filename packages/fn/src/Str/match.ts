import { dfdlT } from "../dfdl/dfdlT"

/**
 * # match
 *
 * ```ts
 * function Str.match(
 *     target: string,
 *     source: string | RegExp,
 * ): RegExpMatchArray | null
 * ```
 *
 * Returns the result of matching `target` string against `source` string or regular expression, or null if no match is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.match("hello world", "world"); // ["world", index: 6, input: "hello world", groups: undefined]
 * Str.match("hello world", /\d+/); // null
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.match("world")); // ["world", index: 6, input: "hello world", groups: undefined]
 * pipe("hello world", Str.match(/\d+/)); // null
 * ```
 *
 */
export const match: {
    (source: string | RegExp): (target: string) => RegExpMatchArray | null
    (target: string, source: string | RegExp): RegExpMatchArray | null
} = dfdlT((target: string, source: string | RegExp): RegExpMatchArray | null => {
    return target.match(source)
}, 2)
