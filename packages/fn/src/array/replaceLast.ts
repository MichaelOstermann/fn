import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `replaceLast(target, value, replacement)`
 *
 * Replaces the last occurrence of `value` with `replacement` in `target` array. If the value is not found or if value and replacement are the same, returns the original array unchanged.
 *
 * ```ts
 * replaceLast([1, 2, 3, 2], 2, 5); // [1, 2, 3, 5]
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 2], replaceLast(2, 5)); // [1, 2, 3, 5]
 * ```
 */
export const replaceLast: {
    <T>(value: NoInfer<T>, replacement: NoInfer<T>): (target: T[]) => T[]
    <T>(value: NoInfer<T>, replacement: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>): T[]
    <T>(target: readonly T[], value: NoInfer<T>, replacement: NoInfer<T>): readonly T[]
} = dual(3, <T>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>): T[] => {
    if (is(value, replacement)) return target
    const idx = target.lastIndexOf(value)
    if (idx === -1) return target
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
})
