import type { SnakeCase } from "string-ts"
import { dual } from "@monstermann/dfdl"
import { snakeCase as apply } from "string-ts"

/**
 * `snakeCase(target)`
 *
 * Converts `target` string to snake_case format.
 *
 * ```ts
 * snakeCase("hello world"); // "hello_world"
 * snakeCase("helloWorld"); // "hello_world"
 * ```
 *
 * ```ts
 * pipe("hello world", snakeCase()); // "hello_world"
 * pipe("helloWorld", snakeCase()); // "hello_world"
 * ```
 */
export const snakeCase: {
    (): <T extends string>(target: T) => SnakeCase<T>
    <T extends string>(target: T): SnakeCase<T>
} = dual(1, <T extends string>(target: T): SnakeCase<T> => {
    return apply(target)
})
