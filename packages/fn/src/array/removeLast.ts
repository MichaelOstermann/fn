import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `removeLast(target, value)`
 *
 * Removes the last occurrence of `value` from `target` array. If the value is not found, returns the original array unchanged.
 *
 * ```ts
 * removeLast([1, 2, 3, 2], 2); // [1, 2, 3]
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 2], removeLast(2)); // [1, 2, 3]
 * ```
 */
export const removeLast: {
    <T>(value: NoInfer<T>): (target: T[]) => T[]
    <T>(value: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], value: NoInfer<T>): T[]
    <T>(target: readonly T[], value: NoInfer<T>): readonly T[]
} = dual(2, <T>(target: T[], value: NoInfer<T>): T[] => {
    const idx = target.lastIndexOf(value)
    if (idx < 0) return target
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
})
