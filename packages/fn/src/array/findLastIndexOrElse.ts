import type { ArrayPredicate, OrElse } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `findLastIndexOrElse(target, predicate, orElse)`
 *
 * Returns the index of the last element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, calls `orElse` with the original array.
 *
 * ```ts
 * findLastIndexOrElse(
 *     [1, 3, 2, 4],
 *     (x) => x > 2,
 *     () => -1,
 * ); // 3
 * findLastIndexOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 5,
 *     (arr) => arr.length,
 * ); // 4
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 3, 2, 4],
 *     findLastIndexOrElse(
 *         (x) => x > 2,
 *         () => -1,
 *     ),
 * ); // 3
 * pipe(
 *     [1, 2, 3, 4],
 *     findLastIndexOrElse(
 *         (x) => x > 5,
 *         (arr) => arr.length,
 *     ),
 * ); // 4
 * ```
 */
export const findLastIndexOrElse: {
    <T, U>(predicate: ArrayPredicate<T>, orElse: OrElse<T, U>): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, orElse: OrElse<T, U>): number | U
} = dual(3, <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, orElse: OrElse<T, U>): number | U => {
    const idx = target.findLastIndex(predicate)
    return idx < 0 ? orElse(target) : idx
})
