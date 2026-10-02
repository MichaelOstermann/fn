import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"

/**
 * # removeLast
 *
 * ```ts
 * function Arr.removeLast<T>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 * ): readonly T[]
 * ```
 *
 * Removes the last occurrence of `value` from `target` array. If the value is not found, returns the original array unchanged.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.removeLast([1, 2, 3, 2], 2); // [1, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 2], Arr.removeLast(2)); // [1, 2, 3]
 * ```
 *
 */
export const removeLast: {
    <T>(value: NoInfer<T>): (target: T[]) => T[]
    <T>(value: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], value: NoInfer<T>): T[]
    <T>(target: readonly T[], value: NoInfer<T>): readonly T[]
} = dfdlT(<T>(target: T[], value: NoInfer<T>): T[] => {
    const idx = target.lastIndexOf(value)
    if (idx < 0) return target
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 2)
