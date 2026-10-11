import type { KebabCase } from "string-ts"
import { kebabCase as apply } from "string-ts"

/**
 * # kebabCase
 *
 * ```ts
 * function String.kebabCase<T extends string>(
 *     target: T,
 * ): KebabCase<T>
 * ```
 *
 * Converts `target` string to kebab-case format.
 *
 * ## Example
 *
 * ```ts
 * String.kebabCase("hello world"); // "hello-world"
 * String.kebabCase("helloWorld"); // "hello-world"
 * ```
 *
 */
export function kebabCase<T extends string>(target: T): KebabCase<T> {
    return apply(target)
}
