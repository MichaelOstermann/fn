import { dfdlT } from "../dfdl/dfdlT"

/**
 * # test
 *
 * ```ts
 * function Str.test(target: string, source: RegExp): boolean
 * ```
 *
 * Tests if `target` string matches the `source` regular expression.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.test("hello world", /world/); // true
 * Str.test("hello world", /\d+/); // false
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.test(/world/)); // true
 * pipe("hello world", Str.test(/\d+/)); // false
 * ```
 *
 */
export const test: {
    (source: RegExp): (target: string) => boolean
    (target: string, source: RegExp): boolean
} = dfdlT((target: string, source: RegExp): boolean => {
    return source.test(target)
}, 2)
