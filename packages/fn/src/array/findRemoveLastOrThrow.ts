import type { ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { FnError } from "../function/FnError"

/**
 * `findRemoveLastOrThrow(array, predicate)`
 *
 * Finds the last element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or throws an error if no element is found.
 *
 * ```ts
 * findRemoveLastOrThrow([1, 2, 3, 4], (x) => x > 2); // [1, 2, 3]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findRemoveLastOrThrow((x) => x > 2),
 * ); // [1, 2, 3]
 * ```
 */
export const findRemoveLastOrThrow: {
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => T[]
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): T[]
} = dfdlT(<T>(target: readonly T[], predicate: ArrayPredicate<T>): T[] => {
    const idx = target.findLastIndex(predicate)
    if (idx === -1) throw new FnError("Array.findRemoveLastOrThrow: Value not found.", [target, predicate])
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 2)
