import type { ArrayPredicate, OrElse } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `findReplaceLastOrElse(array, predicate, replacement, callback)`
 *
 * Finds the last element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or the result of calling `callback` with the array if no element is found.
 *
 * ```ts
 * findReplaceLastOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 10,
 *     99,
 *     (arr) => arr.length,
 * ); // 4
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findReplaceLastOrElse(
 *         (x) => x > 10,
 *         99,
 *         (arr) => arr.length,
 *     ),
 * ); // 4
 * ```
 */
export const findReplaceLastOrElse: {
    <T, U>(predicate: ArrayPredicate<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): (target: T[]) => T[] | U
    <T, U>(predicate: ArrayPredicate<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): T[] | U
    <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): readonly T[] | U
} = dual(4, <T, U>(target: T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): T[] | U => {
    const idx = target.findLastIndex(predicate)
    if (idx === -1) return orElse(target)
    const prev = target[idx]! as T
    if (is(prev, replacement)) return target
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
})
