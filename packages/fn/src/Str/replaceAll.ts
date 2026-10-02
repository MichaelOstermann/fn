import type { ReplaceAll } from "string-ts"
import { dfdlT } from "../dfdl/dfdlT"

/**
 * # replaceAll
 *
 * ```ts
 * function Str.replaceAll<
 *     T extends string,
 *     U extends string | RegExp,
 *     V extends string,
 * >(target: T, search: U, replacement: V): ReplaceAll<T, U, V>
 * ```
 *
 * Replaces all occurrences of `search` string or regular expression in `target` string with `replace` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.replaceAll("hello world world", "world", "universe"); // "hello universe universe"
 * Str.replaceAll("hello world", /o/g, "0"); // "hell0 w0rld"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world world", Str.replaceAll("world", "universe")); // "hello universe universe"
 * pipe("hello world", Str.replaceAll(/o/g, "0")); // "hell0 w0rld"
 * ```
 *
 */
export const replaceAll: {
    <U extends string | RegExp, V extends string>(search: U, replacement: V): <T extends string>(target: T) => ReplaceAll<T, U, V>
    <T extends string, U extends string | RegExp, V extends string>(target: T, search: U, replacement: V): ReplaceAll<T, U, V>
} = dfdlT(<T extends string, U extends string | RegExp, V extends string>(target: T, search: U, replacement: V): ReplaceAll<T, U, V> => {
    return target.replaceAll(search, replacement) as ReplaceAll<T, U, V>
}, 3)
