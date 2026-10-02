import { toUpperCase as apply } from "string-ts"
import { dfdlT } from "../dfdl/dfdlT"

/**
 * # upperCase
 *
 * ```ts
 * function Str.upperCase<T extends string>(
 *     target: T,
 * ): Uppercase<T>
 * ```
 *
 * Converts `target` string to uppercase.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.upperCase("hello world"); // "HELLO WORLD"
 * Str.upperCase("Hello World"); // "HELLO WORLD"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.upperCase()); // "HELLO WORLD"
 * pipe("Hello World", Str.upperCase()); // "HELLO WORLD"
 * ```
 *
 */
export const upperCase: {
    (): <T extends string>(target: T) => Uppercase<T>
    <T extends string>(target: T): Uppercase<T>
} = dfdlT(<T extends string>(target: T): Uppercase<T> => {
    return apply(target)
}, 1)
