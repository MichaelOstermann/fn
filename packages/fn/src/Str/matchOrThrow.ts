import { dfdlT } from "../dfdlT"

/**
 * # matchOrThrow
 *
 * ```ts
 * function Str.matchOrThrow(
 *     target: string,
 *     source: string | RegExp,
 * ): RegExpMatchArray
 * ```
 *
 * Returns the result of matching `target` string against `source` string or regular expression, or throws an error if no match is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.matchOrThrow("hello world", "world"); // ["world", index: 6, input: "hello world", groups: undefined]
 * Str.matchOrThrow("hello world", /\d+/); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.matchOrThrow("world")); // ["world", index: 6, input: "hello world", groups: undefined]
 * pipe("hello world", Str.matchOrThrow(/\d+/)); // throws FnError
 * ```
 *
 */
export const matchOrThrow: {
    (source: string | RegExp): (target: string) => RegExpMatchArray
    (target: string, source: string | RegExp): RegExpMatchArray
} = dfdlT((target: string, source: string | RegExp): RegExpMatchArray => {
    const match = target.match(source)
    if (match) return match
    throw new Error("String.matchOrThrow: Value did not match.")
}, 2)
