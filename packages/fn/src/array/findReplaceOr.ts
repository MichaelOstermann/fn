import type { ArrayPredicate } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `findReplaceOr(array, predicate, replacement, fallback)`
 *
 * Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or `fallback` if no element is found.
 *
 * ```ts
 * findReplaceOr([1, 2, 3, 4], (x) => x > 10, 99, []); // []
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findReplaceOr((x) => x > 10, 99, []),
 * ); // []
 * ```
 */
export const findReplaceOr: {
    <T, U>(predicate: ArrayPredicate<T>, replacement: NoInfer<T>, or: U): (target: T[]) => T[] | U
    <T, U>(predicate: ArrayPredicate<T>, replacement: NoInfer<T>, or: U): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>, or: U): T[] | U
    <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>, or: U): readonly T[] | U
} = dual(4, <T, U>(target: T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>, or: U): T[] | U => {
    const idx = target.findIndex(predicate)
    if (idx === -1) return or
    const prev = target[idx]! as T
    if (is(prev, replacement)) return target
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
})
