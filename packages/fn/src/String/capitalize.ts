import { capitalize as apply } from "string-ts"

/**
 * # capitalize
 *
 * ```ts
 * function String.capitalize<T extends string>(
 *     target: T,
 * ): Capitalize<T>
 * ```
 *
 * Capitalizes the first letter of `target` string.
 *
 * ## Example
 *
 * ```ts
 * String.capitalize("hello world"); // "Hello world"
 * String.capitalize("hello"); // "Hello"
 * ```
 *
 */
export function capitalize<T extends string>(target: T): Capitalize<T> {
    return apply(target)
}
