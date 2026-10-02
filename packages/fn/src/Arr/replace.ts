import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"

/**
 * # replace
 *
 * ```ts
 * function Arr.replace<T>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 *     replacement: NoInfer<T>,
 * ): readonly T[]
 * ```
 *
 * Replaces the first occurrence of `value` with `replacement` in `target` array. If the value is not found or if value and replacement are the same, returns the original array unchanged.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.replace([1, 2, 3, 2], 2, 5); // [1, 5, 3, 2]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 2], Arr.replace(2, 5)); // [1, 5, 3, 2]
 * ```
 *
 */
export const replace: {
    <T>(value: NoInfer<T>, replacement: NoInfer<T>): (target: T[]) => T[]
    <T>(value: NoInfer<T>, replacement: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>): T[]
    <T>(target: readonly T[], value: NoInfer<T>, replacement: NoInfer<T>): readonly T[]
} = dfdlT(<T>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>): T[] => {
    if (value === replacement) return target
    const idx = target.indexOf(value)
    if (idx === -1) return target
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 3)
