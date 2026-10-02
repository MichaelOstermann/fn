import { dfdlT } from "../dfdl/dfdlT"

/**
 * # intersection
 *
 * ```ts
 * function Sets.intersection<T, U>(
 *     target: Set<T>,
 *     source: Set<U>,
 * ): Set<T | U>
 * ```
 *
 * Returns a set containing only the values that exist in both sets.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.intersection(Sets.create([1, 2, 3]), Sets.create([2, 3, 4])); // Set([2, 3])
 * Sets.intersection(Sets.create([1, 2]), Sets.create([3, 4])); // Set([])
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, 2, 3]), Sets.intersection(Sets.create([2, 3, 4]))); // Set([2, 3])
 * pipe(Sets.create([1, 2]), Sets.intersection(Sets.create([3, 4]))); // Set([])
 * ```
 *
 */
export const intersection: {
    <T, U>(source: Set<U>): (target: Set<T>) => Set<T | U>
    <T, U>(target: Set<T>, source: Set<U>): Set<T | U>
} = dfdlT(<T, U>(target: Set<T>, source: Set<U>): Set<T | U> => {
    if (target.size === 0) return target
    if (source.size === 0) return source

    let hasNonMatch = false
    const result = new Set<T>()
    for (const value of target) {
        if (!source.has(value as any)) {
            hasNonMatch = true
        }
        else {
            result.add(value)
        }
    }

    return hasNonMatch ? result : target
}, 2)
