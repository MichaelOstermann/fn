import { dfdlT } from "../dfdlT"

/**
 * # take
 *
 * ```ts
 * function Str.take(target: string, amount: number): string
 * ```
 *
 * Takes the first `amount` characters from `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.take("hello world", 5); // "hello"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.take(5)); // "hello"
 * ```
 *
 */
export const take: {
    (amount: number): (target: string) => string
    (target: string, amount: number): string
} = dfdlT((target: string, amount: number): string => {
    if (amount === 0) return ""
    if (amount >= target.length) return target
    return target.slice(0, amount)
}, 2)
