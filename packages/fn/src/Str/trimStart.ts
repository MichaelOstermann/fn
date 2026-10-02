import type { TrimStart } from "string-ts"
import { dfdlT } from "../dfdl/dfdlT"

/**
 * # trimStart
 *
 * ```ts
 * function Str.trimStart<T extends string>(
 *     target: T,
 * ): TrimStart<T>
 * ```
 *
 * Removes whitespace from the start of `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.trimStart("  hello world  "); // "hello world  "
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("  hello world  ", Str.trimStart()); // "hello world  "
 * ```
 *
 */
export const trimStart: {
    (): <T extends string>(target: T) => TrimStart<T>
    <T extends string>(target: T): TrimStart<T>
} = dfdlT(<T extends string>(target: T): TrimStart<T> => {
    return target.trimStart() as TrimStart<T>
}, 1)
