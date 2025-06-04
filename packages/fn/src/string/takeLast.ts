import { dual } from "@monstermann/dfdl"

/**
 * `takeLast(target, amount)`
 *
 * Takes the last `amount` characters from `target` string.
 *
 * ```ts
 * takeLast("hello world", 5); // "world"
 * ```
 *
 * ```ts
 * pipe("hello world", takeLast(5)); // "world"
 * ```
 */
export const takeLast: {
    (amount: number): (target: string) => string
    (target: string, amount: number): string
} = dual(2, (target: string, amount: number): string => {
    if (amount === 0) return ""
    if (amount >= target.length) return target
    return target.slice(-amount)
})
