import { uncapitalize as apply } from "string-ts"
import { dfdlT } from "../dfdlT"

/**
 * # uncapitalize
 *
 * ```ts
 * function Str.uncapitalize<T extends string>(
 *     target: T,
 * ): Uncapitalize<T>
 * ```
 *
 * Uncapitalizes the first letter of `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.uncapitalize("Hello World"); // "hello World"
 * Str.uncapitalize("Hello"); // "hello"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("Hello World", Str.uncapitalize()); // "hello World"
 * pipe("Hello", Str.uncapitalize()); // "hello"
 * ```
 *
 */
export const uncapitalize: {
    (): <T extends string>(target: T) => Uncapitalize<T>
    <T extends string>(target: T): Uncapitalize<T>
} = dfdlT(<T extends string>(target: T): Uncapitalize<T> => {
    return apply(target)
}, 1)
