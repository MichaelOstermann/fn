import type { Reverse } from "string-ts"
import { reverse as apply } from "string-ts"
import { dfdlT } from "../dfdl/dfdlT"

/**
 * # reverse
 *
 * ```ts
 * function Str.reverse<T extends string>(target: T): Reverse<T>
 * ```
 *
 * Reverses the characters in `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.reverse("hello world"); // "dlrow olleh"
 * Str.reverse("abc"); // "cba"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.reverse()); // "dlrow olleh"
 * pipe("abc", Str.reverse()); // "cba"
 * ```
 *
 */
export const reverse: {
    (): <T extends string>(target: T) => Reverse<T>
    <T extends string>(target: T): Reverse<T>
} = dfdlT(<T extends string>(target: T): Reverse<T> => {
    return apply(target)
}, 1)
