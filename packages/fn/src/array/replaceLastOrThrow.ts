import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { FnError } from "../function/FnError"
import { is } from "../function/is"

/**
 * `replaceLastOrThrow(target, value, replacement)`
 *
 * Replaces the last occurrence of `value` in `target` with `replacement`. If `value` is not found, throws an error.
 *
 * ```ts
 * replaceLastOrThrow([1, 2, 3, 2], 2, 9); // [1, 2, 3, 9]
 * replaceLastOrThrow([1, 2, 3], 4, 9); // throws FnError
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 2], replaceLastOrThrow(2, 9)); // [1, 2, 3, 9]
 * pipe([1, 2, 3], replaceLastOrThrow(4, 9)); // throws FnError
 * ```
 */
export const replaceLastOrThrow: {
    <T>(value: NoInfer<T>, replacement: NoInfer<T>): (target: T[]) => T[]
    <T>(value: NoInfer<T>, replacement: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>): T[]
    <T>(target: readonly T[], value: NoInfer<T>, replacement: NoInfer<T>): readonly T[]
} = dfdlT(<T>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>): T[] => {
    if (is(value, replacement)) return target
    const idx = target.lastIndexOf(value)
    if (idx === -1) throw new FnError("Array.replaceLastOrThrow: Value not found", [target, value, replacement])
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 3)
