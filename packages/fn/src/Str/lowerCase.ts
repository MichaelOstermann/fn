import { toLowerCase as apply } from "string-ts"
import { dfdlT } from "../dfdlT"

/**
 * # lowerCase
 *
 * ```ts
 * function Str.lowerCase<T extends string>(
 *     target: T,
 * ): Lowercase<T>
 * ```
 *
 * Converts `target` string to lowercase.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.lowerCase("HELLO WORLD"); // "hello world"
 * Str.lowerCase("Hello World"); // "hello world"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("HELLO WORLD", Str.lowerCase()); // "hello world"
 * pipe("Hello World", Str.lowerCase()); // "hello world"
 * ```
 *
 */
export const lowerCase: {
    (): <T extends string>(target: T) => Lowercase<T>
    <T extends string>(target: T): Lowercase<T>
} = dfdlT(<T extends string>(target: T): Lowercase<T> => {
    return apply(target)
}, 1)
