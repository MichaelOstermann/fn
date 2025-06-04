import type { ArrayPredicate } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `findRemove(array, predicate)`
 *
 * Finds the first element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element.
 *
 * ```ts
 * findRemove([1, 2, 3, 4], (x) => x > 2); // [1, 2, 4]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findRemove((x) => x > 2),
 * ); // [1, 2, 4]
 * ```
 */
export const findRemove: {
    <T>(predicate: ArrayPredicate<T>): (target: T[]) => T[]
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], predicate: ArrayPredicate<T>): T[]
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): readonly T[]
} = dual(2, <T>(target: T[], predicate: ArrayPredicate<T>): T[] => {
    const idx = target.findIndex(predicate)
    if (idx === -1) return target
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
})
