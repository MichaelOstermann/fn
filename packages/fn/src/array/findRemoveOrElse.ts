import type { ArrayPredicate, OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `findRemoveOrElse(array, predicate, callback)`
 *
 * Finds the first element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or the result of calling `callback` with the array if no element is found.
 *
 * ```ts
 * findRemoveOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 10,
 *     (arr) => arr.length,
 * ); // 4
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findRemoveOrElse(
 *         (x) => x > 10,
 *         (arr) => arr.length,
 *     ),
 * ); // 4
 * ```
 */
export const findRemoveOrElse: {
    <T, U>(predicate: ArrayPredicate<T>, orElse: OrElse<T, U>): (target: readonly T[]) => T[] | U
    <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, orElse: OrElse<T, U>): T[] | U
} = dfdlT(<T, U>(target: readonly T[], predicate: ArrayPredicate<T>, orElse: OrElse<T, U>): T[] | U => {
    const idx = target.findIndex(predicate)
    if (idx === -1) return orElse(target)
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 3)
