import type { ArrayGuard, ArrayMap, ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `findMap(array, predicate, mapper)`
 *
 * Finds the first element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element.
 *
 * ```ts
 * findMap(
 *     [1, 2, 3, 4],
 *     (x) => x > 2,
 *     (x) => x * 10,
 * ); // [1, 2, 30, 4]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findMap(
 *         (x) => x > 2,
 *         (x) => x * 10,
 *     ),
 * ); // [1, 2, 30, 4]
 * ```
 */
export const findMap: {
    <T, U extends T>(predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>): (target: T[]) => T[]
    <T, U extends T>(predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>): (target: readonly T[]) => readonly T[]

    <T>(predicate: ArrayPredicate<T>, mapper: ArrayMap<T>): (target: T[]) => T[]
    <T>(predicate: ArrayPredicate<T>, mapper: ArrayMap<T>): (target: readonly T[]) => readonly T[]

    <T, U extends T>(target: T[], predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>): T[]
    <T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>): readonly T[]

    <T>(target: T[], predicate: ArrayPredicate<T>, mapper: ArrayMap<T>): T[]
    <T>(target: readonly T[], predicate: ArrayPredicate<T>, mapper: ArrayMap<T>): readonly T[]
} = dfdlT(<T, U extends T>(target: T[], predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>): T[] => {
    const idx = target.findIndex(predicate)
    if (idx === -1) return target
    const prev = target[idx]! as T
    const next = mapper(prev, idx, target)
    if (is(prev, next)) return target
    const result = cloneArray(target)
    result.splice(idx, 1, next)
    return result
}, 3)
