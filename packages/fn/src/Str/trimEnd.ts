import type { TrimEnd } from "string-ts"
import { dfdlT } from "../dfdlT"

/**
 * # trimEnd
 *
 * ```ts
 * function Str.trimEnd<T extends string>(target: T): TrimEnd<T>
 * ```
 *
 * Removes whitespace from the end of `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.trimEnd("  hello world  "); // "  hello world"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("  hello world  ", Str.trimEnd()); // "  hello world"
 * ```
 *
 */
export const trimEnd: {
    (): <T extends string>(target: T) => TrimEnd<T>
    <T extends string>(target: T): TrimEnd<T>
} = dfdlT(<T extends string>(target: T): TrimEnd<T> => {
    return target.trimEnd() as TrimEnd<T>
}, 1)
