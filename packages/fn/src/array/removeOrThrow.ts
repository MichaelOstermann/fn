import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { FnError } from "../function/FnError"

/**
 * `removeOrThrow(target, value)`
 *
 * Removes the first occurrence of `value` from `target` array. If the value is not found, throws an error.
 *
 * ```ts
 * removeOrThrow([1, 2, 3, 2], 2); // [1, 3, 2]
 * removeOrThrow([1, 2, 3], 4); // throws FnError
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 2], removeOrThrow(2)); // [1, 3, 2]
 * pipe([1, 2, 3], removeOrThrow(4)); // throws FnError
 * ```
 */
export const removeOrThrow: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => T[]
    <T>(target: readonly T[], value: NoInfer<T>): T[]
} = dfdlT(<T>(target: readonly T[], value: NoInfer<T>): T[] => {
    const idx = target.indexOf(value)
    if (idx < 0) throw new FnError("Array.removeOrThrow: Value not found.", [target, value])
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 2)
