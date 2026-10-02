import type { KebabCase } from "string-ts"
import { kebabCase as apply } from "string-ts"
import { dfdlT } from "../dfdlT"

/**
 * # kebabCase
 *
 * ```ts
 * function Str.kebabCase<T extends string>(
 *     target: T,
 * ): KebabCase<T>
 * ```
 *
 * Converts `target` string to kebab-case format.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.kebabCase("hello world"); // "hello-world"
 * Str.kebabCase("helloWorld"); // "hello-world"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.kebabCase()); // "hello-world"
 * pipe("helloWorld", Str.kebabCase()); // "hello-world"
 * ```
 *
 */
export const kebabCase: {
    (): <T extends string>(target: T) => KebabCase<T>
    <T extends string>(target: T): KebabCase<T>
} = dfdlT(<T extends string>(target: T): KebabCase<T> => {
    return apply(target)
}, 1)
