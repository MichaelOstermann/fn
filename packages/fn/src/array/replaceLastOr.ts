import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `replaceLastOr(target, value, replacement, or)`
 *
 * Replaces the last occurrence of `value` with `replacement` in `target` array. If the value is not found, returns the fallback value `or`. If value and replacement are the same, returns the original array unchanged.
 *
 * ```ts
 * replaceLastOr([1, 2, 3, 2], 2, 5, []); // [1, 2, 3, 5]
 * replaceLastOr([1, 2, 3], 4, 5, []); // []
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 2], replaceLastOr(2, 5, [])); // [1, 2, 3, 5]
 * pipe([1, 2, 3], replaceLastOr(4, 5, [])); // []
 * ```
 */
export const replaceLastOr: {
    <T, U>(value: NoInfer<T>, replacement: NoInfer<T>, or: U): (target: T[]) => T[] | U
    <T, U>(value: NoInfer<T>, replacement: NoInfer<T>, or: U): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>, or: U): T[] | U
    <T, U>(target: readonly T[], value: NoInfer<T>, replacement: NoInfer<T>, or: U): readonly T[] | U
} = dfdlT(<T, U>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>, or: U): T[] | U => {
    if (is(value, replacement)) return target
    const idx = target.lastIndexOf(value)
    if (idx === -1) return or
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 4)
