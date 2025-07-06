import { dfdlT } from "@monstermann/dfdl"
import { uncapitalize as apply } from "string-ts"

/**
 * `uncapitalize(target)`
 *
 * Uncapitalizes the first letter of `target` string.
 *
 * ```ts
 * uncapitalize("Hello World"); // "hello World"
 * uncapitalize("Hello"); // "hello"
 * ```
 *
 * ```ts
 * pipe("Hello World", uncapitalize()); // "hello World"
 * pipe("Hello", uncapitalize()); // "hello"
 * ```
 */
export const uncapitalize: {
    (): <T extends string>(target: T) => Uncapitalize<T>
    <T extends string>(target: T): Uncapitalize<T>
} = dfdlT(<T extends string>(target: T): Uncapitalize<T> => {
    return apply(target)
}, 1)
