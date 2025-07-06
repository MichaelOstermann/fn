import { dfdlT } from "@monstermann/dfdl"

/**
 * `matchOr(target, source, or)`
 *
 * Returns the result of matching `target` string against `source` string or regular expression, or the `or` value if no match is found.
 *
 * ```ts
 * matchOr("hello world", "world", []); // ["world", index: 6, input: "hello world", groups: undefined]
 * matchOr("hello world", /\d+/, []); // []
 * ```
 *
 * ```ts
 * pipe("hello world", matchOr("world", [])); // ["world", index: 6, input: "hello world", groups: undefined]
 * pipe("hello world", matchOr(/\d+/, [])); // []
 * ```
 */
export const matchOr: {
    <T>(source: string | RegExp, or: T): (target: string) => RegExpMatchArray | T
    <T>(target: string, source: string | RegExp, or: T): RegExpMatchArray | T
} = dfdlT(<T>(target: string, source: string | RegExp, or: T): RegExpMatchArray | T => {
    return target.match(source) ?? or
}, 3)
