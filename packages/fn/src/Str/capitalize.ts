import { capitalize as apply } from "string-ts"
import { dfdlT } from "../dfdlT"

/**
 * # capitalize
 *
 * ```ts
 * function Str.capitalize<T extends string>(
 *     target: T,
 * ): Capitalize<T>
 * ```
 *
 * Capitalizes the first letter of `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.capitalize("hello world"); // "Hello world"
 * Str.capitalize("hello"); // "Hello"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.capitalize()); // "Hello world"
 * pipe("hello", Str.capitalize()); // "Hello"
 * ```
 *
 */
export const capitalize: {
    (): <T extends string>(target: T) => Capitalize<T>
    <T extends string>(target: T): Capitalize<T>
} = dfdlT(<T extends string>(target: T): Capitalize<T> => {
    return apply(target)
}, 1)
