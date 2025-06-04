import { dual } from "@monstermann/dfdl"

/**
 * `match(target, source)`
 *
 * Returns the result of matching `target` string against `source` string or regular expression, or null if no match is found.
 *
 * ```ts
 * match("hello world", "world"); // ["world", index: 6, input: "hello world", groups: undefined]
 * match("hello world", /\d+/); // null
 * ```
 *
 * ```ts
 * pipe("hello world", match("world")); // ["world", index: 6, input: "hello world", groups: undefined]
 * pipe("hello world", match(/\d+/)); // null
 * ```
 */
export const match: {
    (source: string | RegExp): (target: string) => RegExpMatchArray | null
    (target: string, source: string | RegExp): RegExpMatchArray | null
} = dual(2, (target: string, source: string | RegExp): RegExpMatchArray | null => {
    return target.match(source)
})
