import type { ArrayPredicate, OrElse } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `findIndexOrElse(target, predicate, orElse)`
 *
 * Returns the index of the first element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, calls `orElse` with the original array.
 *
 * ```ts
 * findIndexOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 2,
 *     () => -1,
 * ); // 2
 * findIndexOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 5,
 *     (arr) => arr.length,
 * ); // 4
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findIndexOrElse(
 *         (x) => x > 2,
 *         () => -1,
 *     ),
 * ); // 2
 * pipe(
 *     [1, 2, 3, 4],
 *     findIndexOrElse(
 *         (x) => x > 5,
 *         (arr) => arr.length,
 *     ),
 * ); // 4
 * ```
 */
export const findIndexOrElse: {
    <T, U>(predicate: ArrayPredicate<T>, orElse: OrElse<T, U>): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, orElse: OrElse<T, U>): number | U
} = dual(3, <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, orElse: OrElse<T, U>): number | U => {
    const idx = target.findIndex(predicate)
    return idx < 0 ? orElse(target) : idx
})
