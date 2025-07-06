import type { Split } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `split(target, source)`
 *
 * Splits `target` string into an array of substrings using `source` string or regular expression as the separator.
 *
 * ```ts
 * split("hello,world,test", ","); // ["hello", "world", "test"]
 * split("hello world", /\s+/); // ["hello", "world"]
 * ```
 *
 * ```ts
 * pipe("hello,world,test", split(",")); // ["hello", "world", "test"]
 * pipe("hello world", split(/\s+/)); // ["hello", "world"]
 * ```
 */
export const split: {
    <U extends string>(delimiter: U): <T extends string>(target: T) => Split<T, U>
    <U extends RegExp>(delimiter: U): <T extends string>(target: T) => string[]
    <T extends string, U extends string>(target: T, delimiter: U): Split<T, U>
    <T extends string, U extends RegExp>(target: T, delimiter: U): string[]
} = dfdlT(<T extends string, U extends string | RegExp>(target: T, delimiter: U): string[] => {
    return target.split(delimiter)
}, 2)
