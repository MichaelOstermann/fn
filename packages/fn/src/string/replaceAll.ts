import type { ReplaceAll } from "string-ts"
import { dual } from "@monstermann/dfdl"

/**
 * `replaceAll(target, search, replace)`
 *
 * Replaces all occurrences of `search` string or regular expression in `target` string with `replace` string.
 *
 * ```ts
 * replaceAll("hello world world", "world", "universe"); // "hello universe universe"
 * replaceAll("hello world", /o/g, "0"); // "hell0 w0rld"
 * ```
 *
 * ```ts
 * pipe("hello world world", replaceAll("world", "universe")); // "hello universe universe"
 * pipe("hello world", replaceAll(/o/g, "0")); // "hell0 w0rld"
 * ```
 */
export const replaceAll: {
    <U extends string | RegExp, V extends string>(search: U, replacement: V): <T extends string>(target: T) => ReplaceAll<T, U, V>
    <T extends string, U extends string | RegExp, V extends string>(target: T, search: U, replacement: V): ReplaceAll<T, U, V>
} = dual(3, <T extends string, U extends string | RegExp, V extends string>(target: T, search: U, replacement: V): ReplaceAll<T, U, V> => {
    return target.replaceAll(search, replacement) as ReplaceAll<T, U, V>
})
