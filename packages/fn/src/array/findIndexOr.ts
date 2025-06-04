import type { ArrayPredicate } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `findIndexOr(target, predicate, or)`
 *
 * Returns the index of the first element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, returns `or`.
 *
 * ```ts
 * findIndexOr([1, 2, 3, 4], (x) => x > 2, -1); // 2
 * findIndexOr([1, 2, 3, 4], (x) => x > 5, -1); // -1
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findIndexOr((x) => x > 2, -1),
 * ); // 2
 * pipe(
 *     [1, 2, 3, 4],
 *     findIndexOr((x) => x > 5, -1),
 * ); // -1
 * ```
 */
export const findIndexOr: {
    <T, U>(predicate: ArrayPredicate<T>, or: U): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, or: U): number | U
} = dual(3, <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, or: U): number | U => {
    const idx = target.findIndex(predicate)
    return idx < 0 ? or : idx
})
