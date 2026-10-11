import type { PascalCase } from "string-ts"
import { pascalCase as apply } from "string-ts"

/**
 * # pascalCase
 *
 * ```ts
 * function String.pascalCase<T extends string>(
 *     target: T,
 * ): PascalCase<T>
 * ```
 *
 * Converts `target` string to PascalCase format.
 *
 * ## Example
 *
 * ```ts
 * String.pascalCase("hello world"); // "HelloWorld"
 * String.pascalCase("hello-world"); // "HelloWorld"
 * ```
 *
 */
export function pascalCase<T extends string>(target: T): PascalCase<T> {
    return apply(target)
}
