import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"

/**
 * # remove
 *
 * ```ts
 * function Arr.remove<T>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 * ): readonly T[]
 * ```
 *
 * Removes the first occurrence of `value` from `target` array. If the value is not found, returns the original array unchanged.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.remove([1, 2, 3, 2], 2); // [1, 3, 2]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 2], Arr.remove(2)); // [1, 3, 2]
 * ```
 *
 */
export const remove: {
    <T>(value: NoInfer<T>): (target: T[]) => T[]
    <T>(value: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], value: NoInfer<T>): T[]
    <T>(target: readonly T[], value: NoInfer<T>): readonly T[]
} = dfdlT(<T>(target: T[], value: NoInfer<T>): T[] => {
    const idx = target.indexOf(value)
    if (idx < 0) return target
    target = cloneArray(target)
    target.splice(idx, 1)
    return target
}, 2)
