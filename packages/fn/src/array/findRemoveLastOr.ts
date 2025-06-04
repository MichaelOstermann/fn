import type { ArrayPredicate } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `findRemoveLastOr(array, predicate, fallback)`
 *
 * Finds the last element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or `fallback` if no element is found.
 *
 * ```ts
 * findRemoveLastOr([1, 2, 3, 4], (x) => x > 10, []); // []
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findRemoveLastOr((x) => x > 10, []),
 * ); // []
 * ```
 */
export const findRemoveLastOr: {
    <T, U>(predicate: ArrayPredicate<T>, or: U): (target: readonly T[]) => T[] | U
    <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, or: U): T[] | U
} = dual(3, <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, or: U): T[] | U => {
    const idx = target.findLastIndex(predicate)
    if (idx === -1) return or
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
})
