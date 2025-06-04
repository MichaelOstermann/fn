import type { ArrayGuard, ArrayMap, ArrayPredicate, OrElse } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `findMapOrElse(array, predicate, mapper, callback)`
 *
 * Finds the first element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or the result of calling `callback` with the array if no element is found.
 *
 * ```ts
 * findMapOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 10,
 *     (x) => x * 10,
 *     (arr) => arr.length,
 * ); // 4
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findMapOrElse(
 *         (x) => x > 10,
 *         (x) => x * 10,
 *         (arr) => arr.length,
 *     ),
 * ); // 4
 * ```
 */
export const findMapOrElse: {
    <T, U extends T, V>(predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>, orElse: OrElse<T, V>): (target: T[]) => T[] | V
    <T, U extends T, V>(predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>, orElse: OrElse<T, V>): (target: readonly T[]) => readonly T[] | V

    <T, V>(predicate: ArrayPredicate<T>, mapper: ArrayMap<T>, orElse: OrElse<T, V>): (target: T[]) => T[] | V
    <T, V>(predicate: ArrayPredicate<T>, mapper: ArrayMap<T>, orElse: OrElse<T, V>): (target: readonly T[]) => readonly T[] | V

    <T, U extends T, V>(target: T[], predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>, orElse: OrElse<T, V>): T[] | V
    <T, U extends T, V>(target: readonly T[], predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>, orElse: OrElse<T, V>): readonly T[] | V

    <T, V>(target: T[], predicate: ArrayPredicate<T>, mapper: ArrayMap<T>, orElse: OrElse<T, V>): T[] | V
    <T, V>(target: readonly T[], predicate: ArrayPredicate<T>, mapper: ArrayMap<T>, orElse: OrElse<T, V>): readonly T[] | V
} = dual(4, <T, U extends T, V>(target: T[], predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>, orElse: OrElse<T, V>): T[] | V => {
    const idx = target.findIndex(predicate)
    if (idx === -1) return orElse(target)
    const prev = target[idx]! as T
    const next = mapper(prev, idx, target)
    if (is(prev, next)) return target
    const result = cloneArray(target)
    result.splice(idx, 1, next)
    return result
})
