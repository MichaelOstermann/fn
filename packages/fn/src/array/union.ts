import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `union(target, source)`
 *
 * Returns a new array containing all unique elements from both `target` and `source`. Elements from `source` that are not already in `target` are added to the result.
 *
 * ```ts
 * union([1, 2, 3], [3, 4, 5]); // [1, 2, 3, 4, 5]
 * ```
 *
 * ```ts
 * pipe([1, 2, 3], union([3, 4, 5])); // [1, 2, 3, 4, 5]
 * ```
 */
export const union: {
    <T>(source: Iterable<NoInfer<T>>): (target: T[]) => T[]
    <T>(source: Iterable<NoInfer<T>>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], source: Iterable<NoInfer<T>>): T[]
    <T>(target: readonly T[], source: Iterable<NoInfer<T>>): readonly T[]
} = dfdlT(<T>(target: T[], source: Iterable<NoInfer<T>>): T[] => {
    let result: T[] | undefined
    for (const item of source) {
        if (!target.includes(item)) {
            result ??= cloneArray(target)
            result.push(item)
        }
    }
    return result ?? target
}, 2)
