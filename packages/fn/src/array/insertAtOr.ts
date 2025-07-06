import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `insertAtOr(array, index, value, fallback)`
 *
 * Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element, or `fallback` if the index is out of bounds.
 *
 * ```ts
 * insertAtOr([1, 2, 3], 10, 99, []); // []
 * ```
 *
 * ```ts
 * pipe([1, 2, 3], insertAtOr(10, 99, [])); // []
 * ```
 */
export const insertAtOr: {
    <T, U>(idx: number, value: NoInfer<T>, or: U): (target: readonly T[]) => T[] | U
    <T, U>(target: readonly T[], idx: number, value: NoInfer<T>, or: U): T[] | U
} = dfdlT(<T, U>(target: readonly T[], idx: number, value: NoInfer<T>, or: U): T[] | U => {
    if (idx < 0 || idx > target.length) return or
    const clone = cloneArray(target)
    clone.splice(idx, 0, value)
    return clone
}, 4)
