import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `removeLastOr(target, value, or)`
 *
 * Removes the last occurrence of `value` from `target` array. If the value is not found, returns the fallback value `or`.
 *
 * ```ts
 * removeLastOr([1, 2, 3, 2], 2, []); // [1, 2, 3]
 * removeLastOr([1, 2, 3], 4, []); // []
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 2], removeLastOr(2, [])); // [1, 2, 3]
 * pipe([1, 2, 3], removeLastOr(4, [])); // []
 * ```
 */
export const removeLastOr: {
    <T, U>(value: NoInfer<T>, or: U): (target: readonly T[]) => T[] | U
    <T, U>(target: readonly T[], value: NoInfer<T>, or: U): T[] | U
} = dual(3, <T, U>(target: readonly T[], value: NoInfer<T>, or: U): T[] | U => {
    const idx = target.lastIndexOf(value)
    if (idx < 0) return or
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
})
