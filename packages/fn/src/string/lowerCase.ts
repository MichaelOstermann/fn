import { dual } from "@monstermann/dfdl"
import { toLowerCase as apply } from "string-ts"

/**
 * `lowerCase(target)`
 *
 * Converts `target` string to lowercase.
 *
 * ```ts
 * lowerCase("HELLO WORLD"); // "hello world"
 * lowerCase("Hello World"); // "hello world"
 * ```
 *
 * ```ts
 * pipe("HELLO WORLD", lowerCase()); // "hello world"
 * pipe("Hello World", lowerCase()); // "hello world"
 * ```
 */
export const lowerCase: {
    (): <T extends string>(target: T) => Lowercase<T>
    <T extends string>(target: T): Lowercase<T>
} = dual(1, <T extends string>(target: T): Lowercase<T> => {
    return apply(target)
})
