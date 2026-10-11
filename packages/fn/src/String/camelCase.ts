import type { CamelCase } from "string-ts"
import { camelCase as apply } from "string-ts"

/**
 * # camelCase
 *
 * ```ts
 * function String.camelCase<T extends string>(
 *     target: T,
 * ): CamelCase<T>
 * ```
 *
 * Converts `target` string to camelCase format.
 *
 * ## Example
 *
 * ```ts
 * String.camelCase("hello world"); // "helloWorld"
 * String.camelCase("hello-world"); // "helloWorld"
 * ```
 *
 */
export function camelCase<T extends string>(target: T): CamelCase<T> {
    return apply(target)
}
