import type { Repeat } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `repeat(target, amount)`
 *
 * Repeats `target` string `amount` times.
 *
 * ```ts
 * repeat("hello", 3); // "hellohellohello"
 * ```
 *
 * ```ts
 * pipe("hello", repeat(3)); // "hellohellohello"
 * ```
 */
export const repeat: {
    <U extends number>(amount: U): <T extends string>(target: T) => Repeat<T, U>
    <T extends string, U extends number>(target: T, amount: U): Repeat<T, U>
} = dfdlT(<T extends string, U extends number>(target: T, amount: U): Repeat<T, U> => {
    return target.repeat(amount)
}, 2)
