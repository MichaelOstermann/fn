import type { PascalCase } from "string-ts"
import { pascalCase as apply } from "string-ts"
import { dfdlT } from "../dfdl/dfdlT"

/**
 * # pascalCase
 *
 * ```ts
 * function Str.pascalCase<T extends string>(
 *     target: T,
 * ): PascalCase<T>
 * ```
 *
 * Converts `target` string to PascalCase format.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.pascalCase("hello world"); // "HelloWorld"
 * Str.pascalCase("hello-world"); // "HelloWorld"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.pascalCase()); // "HelloWorld"
 * pipe("hello-world", Str.pascalCase()); // "HelloWorld"
 * ```
 *
 */
export const pascalCase: {
    (): <T extends string>(target: T) => PascalCase<T>
    <T extends string>(target: T): PascalCase<T>
} = dfdlT(<T extends string>(target: T): PascalCase<T> => {
    return apply(target)
}, 1)
