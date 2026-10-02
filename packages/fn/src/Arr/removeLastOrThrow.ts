import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"

/**
 * # removeLastOrThrow
 *
 * ```ts
 * function Arr.removeLastOrThrow<T>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 * ): T[]
 * ```
 *
 * Removes the last occurrence of `value` from `target` array. If the value is not found, throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.removeLastOrThrow([1, 2, 3, 2], 2); // [1, 2, 3]
 * Arr.removeLastOrThrow([1, 2, 3], 4); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 2], Arr.removeLastOrThrow(2)); // [1, 2, 3]
 * pipe([1, 2, 3], Arr.removeLastOrThrow(4)); // throws FnError
 * ```
 *
 */
export const removeLastOrThrow: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => T[]
    <T>(target: readonly T[], value: NoInfer<T>): T[]
} = dfdlT(<T>(target: readonly T[], value: NoInfer<T>): T[] => {
    const idx = target.lastIndexOf(value)
    if (idx < 0) throw new Error("Array.removeLastOrThrow: Value not found.")
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 2)
