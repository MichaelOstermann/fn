import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `remove(target, value)`
 *
 * Removes the first occurrence of `value` from `target` array. If the value is not found, returns the original array unchanged.
 *
 * ```ts
 * remove([1, 2, 3, 2], 2); // [1, 3, 2]
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 2], remove(2)); // [1, 3, 2]
 * ```
 */
export const remove: {
    <T>(value: NoInfer<T>): (target: T[]) => T[]
    <T>(value: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], value: NoInfer<T>): T[]
    <T>(target: readonly T[], value: NoInfer<T>): readonly T[]
} = dual(2, <T>(target: T[], value: NoInfer<T>): T[] => {
    const idx = target.indexOf(value)
    if (idx < 0) return target
    target = cloneArray(target)
    target.splice(idx, 1)
    return target
})
