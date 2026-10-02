import type { Repeat } from "string-ts"
import { dfdlT } from "../dfdlT"

/**
 * # repeat
 *
 * ```ts
 * function Str.repeat<T extends string, U extends number>(
 *     target: T,
 *     amount: U,
 * ): Repeat<T, U>
 * ```
 *
 * Repeats `target` string `amount` times.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.repeat("hello", 3); // "hellohellohello"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello", Str.repeat(3)); // "hellohellohello"
 * ```
 *
 */
export const repeat: {
    <U extends number>(amount: U): <T extends string>(target: T) => Repeat<T, U>
    <T extends string, U extends number>(target: T, amount: U): Repeat<T, U>
} = dfdlT(<T extends string, U extends number>(target: T, amount: U): Repeat<T, U> => {
    return target.repeat(amount) as Repeat<T, U>
}, 2)
