import { dfdlT } from "../dfdl/dfdlT"

/**
 * # matchOrElse
 *
 * ```ts
 * function Str.matchOrElse<T>(
 *     target: string,
 *     source: string | RegExp,
 *     orElse: (target: string) => T,
 * ): RegExpMatchArray | T
 * ```
 *
 * Returns the result of matching `target` string against `source` string or regular expression, or the result of calling `orElse` function with `target` if no match is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.matchOrElse("hello world", "world", () => []); // ["world", index: 6, input: "hello world", groups: undefined]
 * Str.matchOrElse("hello world", /\d+/, (str) => [str]); // ["hello world"]
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe(
 *     "hello world",
 *     Str.matchOrElse("world", () => []),
 * ); // ["world", index: 6, input: "hello world", groups: undefined]
 *
 * pipe(
 *     "hello world",
 *     Str.matchOrElse(/\d+/, (str) => [str]),
 * ); // ["hello world"]
 * ```
 *
 */
export const matchOrElse: {
    <T>(source: string | RegExp, orElse: (target: string) => T): (target: string) => RegExpMatchArray | T
    <T>(target: string, source: string | RegExp, orElse: (target: string) => T): RegExpMatchArray | T
} = dfdlT(<T>(target: string, source: string | RegExp, orElse: (target: string) => T): RegExpMatchArray | T => {
    return target.match(source) ?? orElse(target)
}, 3)
