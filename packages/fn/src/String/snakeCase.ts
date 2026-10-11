import type { SnakeCase } from "string-ts"
import { snakeCase as apply } from "string-ts"

/**
 * # snakeCase
 *
 * ```ts
 * function String.snakeCase<T extends string>(
 *     target: T,
 * ): SnakeCase<T>
 * ```
 *
 * Converts `target` string to snake_case format.
 *
 * ## Example
 *
 * ```ts
 * String.snakeCase("hello world"); // "hello_world"
 * String.snakeCase("helloWorld"); // "hello_world"
 * ```
 *
 */
export function snakeCase<T extends string>(target: T): SnakeCase<T> {
    return apply(target)
}
