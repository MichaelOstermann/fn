import type { ArrayPredicate } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `findLastIndexOr(target, predicate, or)`
 *
 * Returns the index of the last element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, returns `or`.
 *
 * ```ts
 * findLastIndexOr([1, 3, 2, 4], (x) => x > 2, -1); // 3
 * findLastIndexOr([1, 2, 3, 4], (x) => x > 5, -1); // -1
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 3, 2, 4],
 *     findLastIndexOr((x) => x > 2, -1),
 * ); // 3
 * pipe(
 *     [1, 2, 3, 4],
 *     findLastIndexOr((x) => x > 5, -1),
 * ); // -1
 * ```
 */
export const findLastIndexOr: {
    <T, U>(predicate: ArrayPredicate<T>, or: U): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, or: U): number | U
} = dual(3, <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, or: U): number | U => {
    const idx = target.findLastIndex(predicate)
    return idx < 0 ? or : idx
})
