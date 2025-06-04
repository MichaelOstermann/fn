import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { FnError } from "../function/FnError"
import { is } from "../function/is"

/**
 * `replaceOrThrow(target, value, replacement)`
 *
 * Replaces the first occurrence of `value` in `target` with `replacement`. If `value` is not found, throws an error.
 *
 * ```ts
 * replaceOrThrow([1, 2, 3, 2], 2, 9); // [1, 9, 3, 2]
 * replaceOrThrow([1, 2, 3], 4, 9); // throws FnError
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 2], replaceOrThrow(2, 9)); // [1, 9, 3, 2]
 * pipe([1, 2, 3], replaceOrThrow(4, 9)); // throws FnError
 * ```
 */
export const replaceOrThrow: {
    <T>(value: NoInfer<T>, replacement: NoInfer<T>): (target: T[]) => T[]
    <T>(value: NoInfer<T>, replacement: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>): T[]
    <T>(target: readonly T[], value: NoInfer<T>, replacement: NoInfer<T>): readonly T[]
} = dual(3, <T>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>): T[] => {
    if (is(value, replacement)) return target
    const idx = target.indexOf(value)
    if (idx === -1) throw new FnError("Array.replaceOrThrow: Value not found.", [target, value, replacement])
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
})
