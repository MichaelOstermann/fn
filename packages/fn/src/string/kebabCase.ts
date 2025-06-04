import type { KebabCase } from "string-ts"
import { dual } from "@monstermann/dfdl"
import { kebabCase as apply } from "string-ts"

/**
 * `kebabCase(target)`
 *
 * Converts `target` string to kebab-case format.
 *
 * ```ts
 * kebabCase("hello world"); // "hello-world"
 * kebabCase("helloWorld"); // "hello-world"
 * ```
 *
 * ```ts
 * pipe("hello world", kebabCase()); // "hello-world"
 * pipe("helloWorld", kebabCase()); // "hello-world"
 * ```
 */
export const kebabCase: {
    (): <T extends string>(target: T) => KebabCase<T>
    <T extends string>(target: T): KebabCase<T>
} = dual(1, <T extends string>(target: T): KebabCase<T> => {
    return apply(target)
})
