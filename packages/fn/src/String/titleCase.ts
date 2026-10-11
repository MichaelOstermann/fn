import type { TitleCase } from "string-ts"
import { titleCase as apply } from "string-ts"

/**
 * # titleCase
 *
 * ```ts
 * function String.titleCase<T extends string>(
 *     target: T,
 * ): TitleCase<T>
 * ```
 *
 * Converts `target` string to Title Case format.
 *
 * ## Example
 *
 * ```ts
 * String.titleCase("hello world"); // "Hello World"
 * String.titleCase("hello-world"); // "Hello World"
 * ```
 *
 */
export function titleCase<T extends string>(target: T): TitleCase<T> {
    return apply(target)
}
