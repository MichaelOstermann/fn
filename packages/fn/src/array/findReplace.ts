import type { ArrayPredicate } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `findReplace(array, predicate, replacement)`
 *
 * Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element.
 *
 * ```ts
 * findReplace([1, 2, 3, 4], (x) => x > 2, 10); // [1, 2, 10, 4]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findReplace((x) => x > 2, 10),
 * ); // [1, 2, 10, 4]
 * ```
 */
export const findReplace: {
    <T>(predicate: ArrayPredicate<T>, replacement: NoInfer<T>): (target: T[]) => T[]
    <T>(predicate: ArrayPredicate<T>, replacement: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>): T[]
    <T>(target: readonly T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>): readonly T[]
} = dual(3, <T>(target: T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>): T[] => {
    const idx = target.findIndex(predicate)
    if (idx === -1) return target
    const prev = target[idx]! as T
    if (is(prev, replacement)) return target
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
})
