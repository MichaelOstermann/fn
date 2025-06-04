import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { FnError } from "../function/FnError"

/**
 * `removeLastOrThrow(target, value)`
 *
 * Removes the last occurrence of `value` from `target` array. If the value is not found, throws an error.
 *
 * ```ts
 * removeLastOrThrow([1, 2, 3, 2], 2); // [1, 2, 3]
 * removeLastOrThrow([1, 2, 3], 4); // throws FnError
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 2], removeLastOrThrow(2)); // [1, 2, 3]
 * pipe([1, 2, 3], removeLastOrThrow(4)); // throws FnError
 * ```
 */
export const removeLastOrThrow: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => T[]
    <T>(target: readonly T[], value: NoInfer<T>): T[]
} = dual(2, <T>(target: readonly T[], value: NoInfer<T>): T[] => {
    const idx = target.lastIndexOf(value)
    if (idx < 0) throw new FnError("Array.removeLastOrThrow: Value not found.", [target, value])
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
})
