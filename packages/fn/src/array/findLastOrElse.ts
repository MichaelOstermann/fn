import type { NonNil } from "../internals/types"
import type { ArrayGuard, ArrayPredicate, OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `findLastOrElse(array, predicate, callback)`
 *
 * Returns the last element in `array` that satisfies the provided `predicate` function, or the result of calling `callback` with the array if no element is found.
 *
 * ```ts
 * findLastOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 10,
 *     (arr) => arr.length,
 * ); // 4
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findLastOrElse(
 *         (x) => x > 10,
 *         (arr) => arr.length,
 *     ),
 * ); // 4
 * ```
 */
export const findLastOrElse: {
    <T, U extends T, V>(predicate: ArrayGuard<T, U>, orElse: OrElse<Exclude<T, U>, V>): (target: readonly T[]) => NonNil<U> | V
    <T, V>(predicate: ArrayPredicate<T>, orElse: OrElse<T, V>): (target: readonly T[]) => NonNil<T> | V
    <T, U extends T, V>(target: readonly T[], predicate: ArrayGuard<T, U>, orElse: OrElse<Exclude<T, U>, V>): NonNil<U> | V
    <T, V>(target: readonly T[], predicate: ArrayPredicate<T>, orElse: OrElse<T, V>): NonNil<T> | V
} = dfdlT(<T, V>(target: readonly T[], predicate: ArrayPredicate<T>, orElse: OrElse<T, V>): any => {
    return target.findLast(predicate) ?? orElse(target)
}, 3)
