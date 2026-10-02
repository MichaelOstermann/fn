import { cloneArray } from "../cloneArray"
import { dfdlT } from "../dfdlT"

/**
 * # replaceOrThrow
 *
 * ```ts
 * function Arr.replaceOrThrow<T>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 *     replacement: NoInfer<T>,
 * ): readonly T[]
 * ```
 *
 * Replaces the first occurrence of `value` in `target` with `replacement`. If `value` is not found, throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.replaceOrThrow([1, 2, 3, 2], 2, 9); // [1, 9, 3, 2]
 * Arr.replaceOrThrow([1, 2, 3], 4, 9); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 2], Arr.replaceOrThrow(2, 9)); // [1, 9, 3, 2]
 * pipe([1, 2, 3], Arr.replaceOrThrow(4, 9)); // throws FnError
 * ```
 *
 */
export const replaceOrThrow: {
    <T>(value: NoInfer<T>, replacement: NoInfer<T>): (target: T[]) => T[]
    <T>(value: NoInfer<T>, replacement: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>): T[]
    <T>(target: readonly T[], value: NoInfer<T>, replacement: NoInfer<T>): readonly T[]
} = dfdlT(<T>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>): T[] => {
    if (value === replacement) return target
    const idx = target.indexOf(value)
    if (idx === -1) throw new Error("Array.replaceOrThrow: Value not found.")
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 3)
