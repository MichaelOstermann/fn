import type { Reverse } from "string-ts"
import { dual } from "@monstermann/dfdl"
import { reverse as apply } from "string-ts"

/**
 * `reverse(target)`
 *
 * Reverses the characters in `target` string.
 *
 * ```ts
 * reverse("hello world"); // "dlrow olleh"
 * reverse("abc"); // "cba"
 * ```
 *
 * ```ts
 * pipe("hello world", reverse()); // "dlrow olleh"
 * pipe("abc", reverse()); // "cba"
 * ```
 */
export const reverse: {
    (): <T extends string>(target: T) => Reverse<T>
    <T extends string>(target: T): Reverse<T>
} = dual(1, <T extends string>(target: T): Reverse<T> => {
    return apply(target)
})
