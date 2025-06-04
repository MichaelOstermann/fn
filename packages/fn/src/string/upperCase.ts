import { dual } from "@monstermann/dfdl"
import { toUpperCase as apply } from "string-ts"

/**
 * `upperCase(target)`
 *
 * Converts `target` string to uppercase.
 *
 * ```ts
 * upperCase("hello world"); // "HELLO WORLD"
 * upperCase("Hello World"); // "HELLO WORLD"
 * ```
 *
 * ```ts
 * pipe("hello world", upperCase()); // "HELLO WORLD"
 * pipe("Hello World", upperCase()); // "HELLO WORLD"
 * ```
 */
export const upperCase: {
    (): <T extends string>(target: T) => Uppercase<T>
    <T extends string>(target: T): Uppercase<T>
} = dual(1, <T extends string>(target: T): Uppercase<T> => {
    return apply(target)
})
