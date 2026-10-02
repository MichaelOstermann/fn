import type { TitleCase } from "string-ts"
import { titleCase as apply } from "string-ts"
import { dfdlT } from "../dfdl/dfdlT"

/**
 * # titleCase
 *
 * ```ts
 * function Str.titleCase<T extends string>(
 *     target: T,
 * ): TitleCase<T>
 * ```
 *
 * Converts `target` string to Title Case format.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.titleCase("hello world"); // "Hello World"
 * Str.titleCase("hello-world"); // "Hello World"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.titleCase()); // "Hello World"
 * pipe("hello-world", Str.titleCase()); // "Hello World"
 * ```
 *
 */
export const titleCase: {
    (): <T extends string>(target: T) => TitleCase<T>
    <T extends string>(target: T): TitleCase<T>
} = dfdlT(<T extends string>(target: T): TitleCase<T> => {
    return apply(target)
}, 1)
