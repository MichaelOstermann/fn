import type { SnakeCase } from "string-ts"
import { snakeCase as apply } from "string-ts"
import { dfdlT } from "../dfdl/dfdlT"

/**
 * # snakeCase
 *
 * ```ts
 * function Str.snakeCase<T extends string>(
 *     target: T,
 * ): SnakeCase<T>
 * ```
 *
 * Converts `target` string to snake_case format.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.snakeCase("hello world"); // "hello_world"
 * Str.snakeCase("helloWorld"); // "hello_world"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.snakeCase()); // "hello_world"
 * pipe("helloWorld", Str.snakeCase()); // "hello_world"
 * ```
 *
 */
export const snakeCase: {
    (): <T extends string>(target: T) => SnakeCase<T>
    <T extends string>(target: T): SnakeCase<T>
} = dfdlT(<T extends string>(target: T): SnakeCase<T> => {
    return apply(target)
}, 1)
