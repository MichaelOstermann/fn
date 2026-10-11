import { uncapitalize as apply } from "string-ts"

/**
 * # uncapitalize
 *
 * ```ts
 * function String.uncapitalize<T extends string>(
 *     target: T,
 * ): Uncapitalize<T>
 * ```
 *
 * Uncapitalizes the first letter of `target` string.
 *
 * ## Example
 *
 * ```ts
 * String.uncapitalize("Hello World"); // "hello World"
 * String.uncapitalize("Hello"); // "hello"
 * ```
 *
 */
export function uncapitalize<T extends string>(target: T): Uncapitalize<T> {
    return apply(target)
}
