import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `prepend(array, value)`
 *
 * Adds `value` to the beginning of `array`.
 *
 * ```ts
 * prepend([2, 3, 4], 1); // [1, 2, 3, 4]
 * ```
 *
 * ```ts
 * pipe([2, 3, 4], prepend(1)); // [1, 2, 3, 4]
 * ```
 */
export const prepend: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => T[]
    <T>(target: readonly T[], value: NoInfer<T>): T[]
} = dual(2, <T>(target: readonly T[], value: NoInfer<T>): T[] => {
    const clone = cloneArray(target)
    clone.unshift(value)
    return clone
})
