import type { ArrayPredicate } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { FnError } from "../function/FnError"
import { is } from "../function/is"

/**
 * `findReplaceOrThrow(array, predicate, replacement)`
 *
 * Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or throws an error if no element is found.
 *
 * ```ts
 * findReplaceOrThrow([1, 2, 3, 4], (x) => x > 2, 99); // [1, 2, 99, 4]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findReplaceOrThrow((x) => x > 2, 99),
 * ); // [1, 2, 99, 4]
 * ```
 */
export const findReplaceOrThrow: {
    <T>(predicate: ArrayPredicate<T>, replacement: NoInfer<T>): (target: T[]) => T[]
    <T>(predicate: ArrayPredicate<T>, replacement: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>): T[]
    <T>(target: readonly T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>): readonly T[]
} = dual(3, <T>(target: T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>): T[] => {
    const idx = target.findIndex(predicate)
    if (idx === -1) throw new FnError("Array.findReplaceOrThrow: Value not found.", [target, predicate, replacement])
    const prev = target[idx]! as T
    if (is(prev, replacement)) return target
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
})
