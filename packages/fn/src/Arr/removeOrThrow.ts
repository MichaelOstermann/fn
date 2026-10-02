import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"

/**
 * # removeOrThrow
 *
 * ```ts
 * function Arr.removeOrThrow<T>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 * ): T[]
 * ```
 *
 * Removes the first occurrence of `value` from `target` array. If the value is not found, throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.removeOrThrow([1, 2, 3, 2], 2); // [1, 3, 2]
 * Arr.removeOrThrow([1, 2, 3], 4); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 2], Arr.removeOrThrow(2)); // [1, 3, 2]
 * pipe([1, 2, 3], Arr.removeOrThrow(4)); // throws FnError
 * ```
 *
 */
export const removeOrThrow: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => T[]
    <T>(target: readonly T[], value: NoInfer<T>): T[]
} = dfdlT(<T>(target: readonly T[], value: NoInfer<T>): T[] => {
    const idx = target.indexOf(value)
    if (idx < 0) throw new Error("Array.removeOrThrow: Value not found.")
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 2)
