import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `replace(target, value, replacement)`
 *
 * Replaces the first occurrence of `value` with `replacement` in `target` array. If the value is not found or if value and replacement are the same, returns the original array unchanged.
 *
 * ```ts
 * replace([1, 2, 3, 2], 2, 5); // [1, 5, 3, 2]
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 2], replace(2, 5)); // [1, 5, 3, 2]
 * ```
 */
export const replace: {
    <T>(value: NoInfer<T>, replacement: NoInfer<T>): (target: T[]) => T[]
    <T>(value: NoInfer<T>, replacement: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>): T[]
    <T>(target: readonly T[], value: NoInfer<T>, replacement: NoInfer<T>): readonly T[]
} = dfdlT(<T>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>): T[] => {
    if (is(value, replacement)) return target
    const idx = target.indexOf(value)
    if (idx === -1) return target
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 3)
