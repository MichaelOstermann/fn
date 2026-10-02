import { dfdlT } from "../dfdl/dfdlT"

/**
 * # dropLast
 *
 * ```ts
 * function Str.dropLast(target: string, amount: number): string
 * ```
 *
 * Removes the last `amount` characters from `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.dropLast("hello world", 6); // "hello"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.dropLast(6)); // "hello"
 * ```
 *
 */
export const dropLast: {
    (amount: number): (target: string) => string
    (target: string, amount: number): string
} = dfdlT((target: string, amount: number): string => {
    if (amount === 0) return target
    if (amount >= target.length) return ""
    return target.slice(0, -amount)
}, 2)
