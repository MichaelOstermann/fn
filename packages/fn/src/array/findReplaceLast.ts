import type { ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `findReplaceLast(array, predicate, replacement)`
 *
 * Finds the last element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element.
 *
 * ```ts
 * findReplaceLast([1, 2, 3, 4], (x) => x > 2, 10); // [1, 2, 3, 10]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findReplaceLast((x) => x > 2, 10),
 * ); // [1, 2, 3, 10]
 * ```
 */
export const findReplaceLast: {
    <T>(predicate: ArrayPredicate<T>, replacement: NoInfer<T>): (target: T[]) => T[]
    <T>(predicate: ArrayPredicate<T>, replacement: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>): T[]
    <T>(target: readonly T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>): readonly T[]
} = dfdlT(<T>(target: T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>): T[] => {
    const idx = target.findLastIndex(predicate)
    if (idx === -1) return target
    const prev = target[idx]! as T
    if (is(prev, replacement)) return target
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 3)
