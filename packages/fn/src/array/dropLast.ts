import { dual } from "@monstermann/dfdl"
import { cloneArray, markAsMutable } from "@monstermann/remmi"

/**
 * `dropLast(target, amount)`
 *
 * Removes `amount` of elements from the end of the `target` array.
 *
 * ```ts
 * dropLast([1, 2, 3, 4, 5], 2); // [1, 2, 3]
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4, 5], dropLast(2)); // [1, 2, 3]
 * ```
 */
export const dropLast: {
    (amount: number): <T>(target: T[]) => T[]
    (amount: number): <T>(target: readonly T[]) => readonly T[]

    <T>(target: T[], amount: number): T[]
    <T>(target: readonly T[], amount: number): readonly T[]
} = dual(2, <T>(target: T[], amount: number): T[] => {
    if (target.length === 0 || amount < 0 || !Number.isInteger(amount)) return target
    if (target.length <= amount) return markAsMutable([])
    target = cloneArray(target)
    target.splice(target.length - amount, amount)
    return target
})
