import { dfdlT } from "@monstermann/dfdl"

/**
 * `matchOrElse(target, source, orElse)`
 *
 * Returns the result of matching `target` string against `source` string or regular expression, or the result of calling `orElse` function with `target` if no match is found.
 *
 * ```ts
 * matchOrElse("hello world", "world", () => []); // ["world", index: 6, input: "hello world", groups: undefined]
 * matchOrElse("hello world", /\d+/, (str) => [str]); // ["hello world"]
 * ```
 *
 * ```ts
 * pipe(
 *     "hello world",
 *     matchOrElse("world", () => []),
 * ); // ["world", index: 6, input: "hello world", groups: undefined]
 *
 * pipe(
 *     "hello world",
 *     matchOrElse(/\d+/, (str) => [str]),
 * ); // ["hello world"]
 * ```
 */
export const matchOrElse: {
    <T>(source: string | RegExp, orElse: (target: string) => T): (target: string) => RegExpMatchArray | T
    <T>(target: string, source: string | RegExp, orElse: (target: string) => T): RegExpMatchArray | T
} = dfdlT(<T>(target: string, source: string | RegExp, orElse: (target: string) => T): RegExpMatchArray | T => {
    return target.match(source) ?? orElse(target)
}, 3)
