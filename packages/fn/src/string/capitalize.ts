import { dfdlT } from "@monstermann/dfdl"
import { capitalize as apply } from "string-ts"

/**
 * `capitalize(target)`
 *
 * Capitalizes the first letter of `target` string.
 *
 * ```ts
 * capitalize("hello world"); // "Hello world"
 * capitalize("hello"); // "Hello"
 * ```
 *
 * ```ts
 * pipe("hello world", capitalize()); // "Hello world"
 * pipe("hello", capitalize()); // "Hello"
 * ```
 */
export const capitalize: {
    (): <T extends string>(target: T) => Capitalize<T>
    <T extends string>(target: T): Capitalize<T>
} = dfdlT(<T extends string>(target: T): Capitalize<T> => {
    return apply(target)
}, 1)
