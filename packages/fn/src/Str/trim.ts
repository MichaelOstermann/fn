import type { Trim } from "string-ts"
import { dfdlT } from "../dfdl/dfdlT"

/**
 * # trim
 *
 * ```ts
 * function Str.trim<T extends string>(target: T): Trim<T>
 * ```
 *
 * Removes whitespace from both ends of `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.trim("  hello world  "); // "hello world"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("  hello world  ", Str.trim()); // "hello world"
 * ```
 *
 */
export const trim: {
    (): <T extends string>(target: T) => Trim<T>
    <T extends string>(target: T): Trim<T>
} = dfdlT(<T extends string>(target: T): Trim<T> => {
    return target.trim() as Trim<T>
}, 1)
