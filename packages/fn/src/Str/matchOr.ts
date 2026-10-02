import { dfdlT } from "../dfdlT"

/**
 * # matchOr
 *
 * ```ts
 * function Str.matchOr<T>(
 *     target: string,
 *     source: string | RegExp,
 *     or: T,
 * ): RegExpMatchArray | T
 * ```
 *
 * Returns the result of matching `target` string against `source` string or regular expression, or the `or` value if no match is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.matchOr("hello world", "world", []); // ["world", index: 6, input: "hello world", groups: undefined]
 * Str.matchOr("hello world", /\d+/, []); // []
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.matchOr("world", [])); // ["world", index: 6, input: "hello world", groups: undefined]
 * pipe("hello world", Str.matchOr(/\d+/, [])); // []
 * ```
 *
 */
export const matchOr: {
    <T>(source: string | RegExp, or: T): (target: string) => RegExpMatchArray | T
    <T>(target: string, source: string | RegExp, or: T): RegExpMatchArray | T
} = dfdlT(<T>(target: string, source: string | RegExp, or: T): RegExpMatchArray | T => {
    return target.match(source) ?? or
}, 3)
