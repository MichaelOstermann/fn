import { dual } from "@monstermann/dfdl"
import { cloneArray, markAsMutable } from "@monstermann/remmi"

/**
 * `takeLast(array, amount)`
 *
 * Returns a new array containing the last `amount` elements from `array`.
 *
 * ```ts
 * takeLast([1, 2, 3, 4, 5], 3); // [3, 4, 5]
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4, 5], takeLast(3)); // [3, 4, 5]
 * ```
 */
export const takeLast: {
    <T>(amount: number): (target: T[]) => T[]
    <T>(amount: number): (target: readonly T[]) => readonly T[]

    <T>(target: T[], amount: number): T[]
    <T>(target: readonly T[], amount: number): readonly T[]
} = dual(2, <T>(target: T[], amount: number): T[] => {
    if (target.length === 0 || amount < 0 || !Number.isInteger(amount)) return target
    if (target.length <= amount) return markAsMutable([])
    target = cloneArray(target)
    target.splice(0, target.length - amount)
    return target
})
