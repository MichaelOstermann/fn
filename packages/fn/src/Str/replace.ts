import type { Replace } from "string-ts"
import { dfdlT } from "../dfdlT"

/**
 * # replace
 *
 * ```ts
 * function Str.replace<
 *     T extends string,
 *     U extends string | RegExp,
 *     V extends string,
 * >(target: T, search: U, replacement: V): Replace<T, U, V>
 * ```
 *
 * Replaces the first occurrence of `search` string or regular expression in `target` string with `replace` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.replace("hello world", "world", "universe"); // "hello universe"
 * Str.replace("hello world", /o/g, "0"); // "hell0 w0rld"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.replace("world", "universe")); // "hello universe"
 * pipe("hello world", Str.replace(/o/g, "0")); // "hell0 w0rld"
 * ```
 *
 */
export const replace: {
    <U extends string | RegExp, V extends string>(search: U, replacement: V): <T extends string>(target: T) => Replace<T, U, V>
    <T extends string, U extends string | RegExp, V extends string>(target: T, search: U, replacement: V): Replace<T, U, V>
} = dfdlT(<T extends string, U extends string | RegExp, V extends string>(target: T, search: U, replacement: V): Replace<T, U, V> => {
    return target.replace(search, replacement) as Replace<T, U, V>
}, 3)
