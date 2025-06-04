import type { ArrayPredicate } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `findLastIndexOrThrow(target, predicate)`
 *
 * Returns the index of the last element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, throws an error.
 *
 * ```ts
 * findLastIndexOrThrow([1, 3, 2, 4], (x) => x > 2); // 3
 * findLastIndexOrThrow([1, 2, 3, 4], (x) => x > 5); // throws FnError
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 3, 2, 4],
 *     findLastIndexOrThrow((x) => x > 2),
 * ); // 3
 * pipe(
 *     [1, 2, 3, 4],
 *     findLastIndexOrThrow((x) => x > 5),
 * ); // throws FnError
 * ```
 */
export const findLastIndexOrThrow: {
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => number
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): number
} = dual(2, <T>(target: readonly T[], predicate: ArrayPredicate<T>): number => {
    const idx = target.findLastIndex(predicate)
    if (idx < 0) throw new FnError("Array.findLastIndexOrThrow: No value found.", [target, predicate])
    return idx
})
