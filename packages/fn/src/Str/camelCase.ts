import type { CamelCase } from "string-ts"
import { camelCase as apply } from "string-ts"
import { dfdlT } from "../dfdlT"

/**
 * # camelCase
 *
 * ```ts
 * function Str.camelCase<T extends string>(
 *     target: T,
 * ): CamelCase<T>
 * ```
 *
 * Converts `target` string to camelCase format.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.camelCase("hello world"); // "helloWorld"
 * Str.camelCase("hello-world"); // "helloWorld"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.camelCase()); // "helloWorld"
 * pipe("hello-world", Str.camelCase()); // "helloWorld"
 * ```
 *
 */
export const camelCase: {
    (): <T extends string>(target: T) => CamelCase<T>
    <T extends string>(target: T): CamelCase<T>
} = dfdlT(<T extends string>(target: T): CamelCase<T> => {
    return apply(target)
}, 1)
