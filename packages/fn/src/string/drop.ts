import { dual } from "@monstermann/dfdl"

/**
 * `drop(target, amount)`
 *
 * Removes the first `amount` characters from `target` string.
 *
 * ```ts
 * drop("hello world", 6); // "world"
 * ```
 *
 * ```ts
 * pipe("hello world", drop(6)); // "world"
 * ```
 */
export const drop: {
    (amount: number): (target: string) => string
    (target: string, amount: number): string
} = dual(2, (target: string, amount: number): string => {
    if (amount === 0) return target
    if (amount >= target.length) return ""
    return target.slice(amount)
})
