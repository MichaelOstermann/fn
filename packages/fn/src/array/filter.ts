import type { ArrayGuard, ArrayPredicate } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { addRange, createRange, hasRange, spliceRange } from "./internals/range"

/**
 * `filter(target, by)`
 *
 * Filters elements from `target` array based on the predicate function `by`.
 *
 * ```ts
 * filter([1, 2, 3, 4], (x) => x > 2); // [3, 4]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     filter((x) => x > 2),
 * ); // [3, 4]
 * ```
 */
export const filter: {
    <T, U extends T>(by: ArrayGuard<T, U>): (target: T[]) => U[]
    <T, U extends T>(by: ArrayGuard<T, U>): (target: readonly T[]) => readonly U[]

    <T>(by: ArrayPredicate<T>): (target: T[]) => T[]
    <T>(by: ArrayPredicate<T>): (target: readonly T[]) => readonly T[]

    <T, U extends T>(target: T[], by: ArrayGuard<T, U>): U[]
    <T, U extends T>(target: readonly T[], by: ArrayGuard<T, U>): readonly U[]

    <T>(target: T[], by: ArrayPredicate<T>): T[]
    <T>(target: readonly T[], by: ArrayPredicate<T>): readonly T[]
} = dual(2, <T, U extends T>(target: T[], by: ArrayGuard<T, U>): (T | U)[] => {
    const range = createRange()

    for (let i = 0; i < target.length; i++) {
        if (!by(target[i]!, i, target)) {
            addRange(range, i)
        }
    }

    if (hasRange(range)) {
        const result = cloneArray(target)
        spliceRange(result, range)
        return result
    }

    return target
})
