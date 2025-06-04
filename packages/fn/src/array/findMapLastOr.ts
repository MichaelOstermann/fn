import type { ArrayGuard, ArrayMap, ArrayPredicate } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `findMapLastOr(array, predicate, mapper, fallback)`
 *
 * Finds the last element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or `fallback` if no element is found.
 *
 * ```ts
 * findMapLastOr(
 *     [1, 2, 3, 4],
 *     (x) => x > 10,
 *     (x) => x * 10,
 *     [],
 * ); // []
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findMapLastOr(
 *         (x) => x > 10,
 *         (x) => x * 10,
 *         [],
 *     ),
 * ); // []
 * ```
 */
export const findMapLastOr: {
    <T, U extends T, V>(predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>, or: V): (target: T[]) => T[] | V
    <T, U extends T, V>(predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>, or: V): (target: readonly T[]) => readonly T[] | V

    <T, V>(predicate: ArrayPredicate<T>, mapper: ArrayMap<T>, or: V): (target: T[]) => T[] | V
    <T, V>(predicate: ArrayPredicate<T>, mapper: ArrayMap<T>, or: V): (target: readonly T[]) => readonly T[] | V

    <T, U extends T, V>(target: T[], predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>, or: V): T[] | V
    <T, U extends T, V>(target: readonly T[], predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>, or: V): readonly T[] | V

    <T, V>(target: T[], predicate: ArrayPredicate<T>, mapper: ArrayMap<T>, or: V): T[] | V
    <T, V>(target: readonly T[], predicate: ArrayPredicate<T>, mapper: ArrayMap<T>, or: V): readonly T[] | V
} = dual(4, <T, V>(target: T[], predicate: ArrayPredicate<T>, mapper: ArrayMap<T>, or: V): T[] | V => {
    const idx = target.findLastIndex(predicate)
    if (idx === -1) return or
    const prev = target[idx]! as T
    const next = mapper(prev, idx, target)
    if (is(prev, next)) return target
    const result = cloneArray(target)
    result.splice(idx, 1, next)
    return result
})
