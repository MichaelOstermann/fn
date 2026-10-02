import type { Split } from "string-ts"
import { dfdlT } from "../dfdlT"

/**
 * # split
 *
 * ```ts
 * function Str.split<T extends string, U extends RegExp>(
 *     target: T,
 *     delimiter: U,
 * ): string[]
 * ```
 *
 * Splits `target` string into an array of substrings using `source` string or regular expression as the separator.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.split("hello,world,test", ","); // ["hello", "world", "test"]
 * Str.split("hello world", /\s+/); // ["hello", "world"]
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello,world,test", Str.split(",")); // ["hello", "world", "test"]
 * pipe("hello world", Str.split(/\s+/)); // ["hello", "world"]
 * ```
 *
 */
export const split: {
    <U extends string>(delimiter: U): <T extends string>(target: T) => Split<T, U>
    <U extends RegExp>(delimiter: U): <T extends string>(target: T) => string[]
    <T extends string, U extends string>(target: T, delimiter: U): Split<T, U>
    <T extends string, U extends RegExp>(target: T, delimiter: U): string[]
} = dfdlT(<T extends string, U extends string | RegExp>(target: T, delimiter: U): string[] => {
    return target.split(delimiter)
}, 2)
