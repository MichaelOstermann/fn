import { dual } from "@monstermann/dfdl"
import { cloneArray, markAsMutable } from "@monstermann/remmi"

/**
 * `take(array, amount)`
 *
 * Returns a new array containing the first `amount` elements from `array`.
 *
 * ```ts
 * take([1, 2, 3, 4, 5], 3); // [1, 2, 3]
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4, 5], take(3)); // [1, 2, 3]
 * ```
 */
export const take: {
    <T>(amount: number): (target: T[]) => T[]
    <T>(amount: number): (target: readonly T[]) => readonly T[]

    <T>(target: T[], amount: number): T[]
    <T>(target: readonly T[], amount: number): readonly T[]
} = dual(2, <T>(target: T[], amount: number): T[] => {
    if (target.length === 0 || amount < 0 || !Number.isInteger(amount)) return target
    if (target.length <= amount) return markAsMutable([])
    target = cloneArray(target)
    target.splice(amount, target.length - amount)
    return target
})
