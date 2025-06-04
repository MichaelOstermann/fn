import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { FnError } from "../function/FnError"

/**
 * `insertAtOrThrow(array, index, value)`
 *
 * Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element, or throws an error if the index is out of bounds.
 *
 * ```ts
 * insertAtOrThrow([1, 2, 3], 1, 10); // [1, 10, 2, 3]
 * ```
 *
 * ```ts
 * pipe([1, 2, 3], insertAtOrThrow(1, 10)); // [1, 10, 2, 3]
 * ```
 */
export const insertAtOrThrow: {
    <T>(idx: number, value: NoInfer<T>): (target: readonly T[]) => T[]
    <T>(target: readonly T[], idx: number, value: NoInfer<T>): T[]
} = dual(3, <T>(target: readonly T[], idx: number, value: NoInfer<T>): T[] => {
    if (idx < 0 || idx > target.length) throw new FnError("Array.insertAtOrThrow: Index is out of range", [target, idx, value])
    const clone = cloneArray(target)
    clone.splice(idx, 0, value)
    return clone
})
