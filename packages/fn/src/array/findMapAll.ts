import type { ArrayGuard, ArrayMap, ArrayPredicate } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `findMapAll(array, predicate, mapper)`
 *
 * Finds all elements in `array` that satisfy the provided `predicate` function and applies the `mapper` function to each of them, returning a new array with the mapped elements.
 *
 * ```ts
 * findMapAll(
 *     [1, 2, 3, 4],
 *     (x) => x > 2,
 *     (x) => x * 10,
 * ); // [1, 2, 30, 40]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findMapAll(
 *         (x) => x > 2,
 *         (x) => x * 10,
 *     ),
 * ); // [1, 2, 30, 40]
 * ```
 */
export const findMapAll: {
    <T, U extends T>(predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>): (target: T[]) => T[]
    <T, U extends T>(predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>): (target: readonly T[]) => readonly T[]

    <T>(predicate: ArrayPredicate<T>, mapper: ArrayMap<T>): (target: T[]) => T[]
    <T>(predicate: ArrayPredicate<T>, mapper: ArrayMap<T>): (target: readonly T[]) => readonly T[]

    <T, U extends T>(target: T[], predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>): T[]
    <T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>): readonly T[]

    <T>(target: T[], predicate: ArrayPredicate<T>, mapper: ArrayMap<T>): T[]
    <T>(target: readonly T[], predicate: ArrayPredicate<T>, mapper: ArrayMap<T>): readonly T[]
} = dual(3, <T, U extends T>(target: T[], predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>): T[] => {
    let result
    for (let i = 0; i < target.length; i++) {
        const prev = target[i]!
        if (!predicate(prev, i, target)) continue
        const next = mapper(prev, i, target)
        if (prev === next) continue
        result ??= cloneArray(target)
        result[i] = next
    }
    return result ?? target
})
