import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `append(array, value)`
 *
 * Appends `value` to the end of `array`.
 *
 * ```ts
 * append([1, 2, 3], 4); // [1, 2, 3, 4]
 * ```
 *
 * ```ts
 * pipe([1, 2, 3], append(4)); // [1, 2, 3, 4]
 * ```
 */
export const append: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => T[]
    <T>(target: readonly T[], value: NoInfer<T>): T[]
} = dual(2, <T>(target: readonly T[], value: NoInfer<T>): T[] => {
    const result = cloneArray(target)
    result.push(value)
    return result
})
