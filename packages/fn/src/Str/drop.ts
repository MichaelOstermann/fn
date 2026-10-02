import { dfdlT } from "../dfdl/dfdlT"

/**
 * # drop
 *
 * ```ts
 * function Str.drop(target: string, amount: number): string
 * ```
 *
 * Removes the first `amount` characters from `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.drop("hello world", 6); // "world"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.drop(6)); // "world"
 * ```
 *
 */
export const drop: {
    (amount: number): (target: string) => string
    (target: string, amount: number): string
} = dfdlT((target: string, amount: number): string => {
    if (amount === 0) return target
    if (amount >= target.length) return ""
    return target.slice(amount)
}, 2)
