import { dfdlT } from "@monstermann/dfdl"

/**
 * `take(target, amount)`
 *
 * Takes the first `amount` characters from `target` string.
 *
 * ```ts
 * take("hello world", 5); // "hello"
 * ```
 *
 * ```ts
 * pipe("hello world", take(5)); // "hello"
 * ```
 */
export const take: {
    (amount: number): (target: string) => string
    (target: string, amount: number): string
} = dfdlT((target: string, amount: number): string => {
    if (amount === 0) return ""
    if (amount >= target.length) return target
    return target.slice(0, amount)
}, 2)
