import type { Trim } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `trim(target)`
 *
 * Removes whitespace from both ends of `target` string.
 *
 * ```ts
 * trim("  hello world  "); // "hello world"
 * ```
 *
 * ```ts
 * pipe("  hello world  ", trim()); // "hello world"
 * ```
 */
export const trim: {
    (): <T extends string>(target: T) => Trim<T>
    <T extends string>(target: T): Trim<T>
} = dfdlT(<T extends string>(target: T): Trim<T> => {
    return target.trim() as Trim<T>
}, 1)
