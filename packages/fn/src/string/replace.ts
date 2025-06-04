import type { Replace } from "string-ts"
import { dual } from "@monstermann/dfdl"

/**
 * `replace(target, search, replace)`
 *
 * Replaces the first occurrence of `search` string or regular expression in `target` string with `replace` string.
 *
 * ```ts
 * replace("hello world", "world", "universe"); // "hello universe"
 * replace("hello world", /o/g, "0"); // "hell0 w0rld"
 * ```
 *
 * ```ts
 * pipe("hello world", replace("world", "universe")); // "hello universe"
 * pipe("hello world", replace(/o/g, "0")); // "hell0 w0rld"
 * ```
 */
export const replace: {
    <U extends string | RegExp, V extends string>(search: U, replacement: V): <T extends string>(target: T) => Replace<T, U, V>
    <T extends string, U extends string | RegExp, V extends string>(target: T, search: U, replacement: V): Replace<T, U, V>
} = dual(3, <T extends string, U extends string | RegExp, V extends string>(target: T, search: U, replacement: V): Replace<T, U, V> => {
    return target.replace(search, replacement) as Replace<T, U, V>
})
