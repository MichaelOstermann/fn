import { dual } from "@monstermann/dfdl"
import { cloneArray, markAsMutable } from "@monstermann/remmi"

/**
 * `drop(array, amount)`
 *
 * Removes the first `amount` elements from `array`.
 *
 * ```ts
 * drop([1, 2, 3, 4, 5], 2); // [3, 4, 5]
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4, 5], drop(2)); // [3, 4, 5]
 * ```
 */
export const drop: {
    (amount: number): <T>(target: T[]) => T[]
    (amount: number): <T>(target: readonly T[]) => readonly T[]

    <T>(target: T[], amount: number): T[]
    <T>(target: readonly T[], amount: number): readonly T[]
} = dual(2, <T>(target: T[], amount: number): T[] => {
    if (!Number.isInteger(amount) || target.length === 0 || amount < 0) return target
    if (target.length <= amount) return markAsMutable([])
    target = cloneArray(target)
    target.splice(0, amount)
    return target
})
