import { dfdlT } from "../dfdlT"

/**
 * # difference
 *
 * ```ts
 * function Sets.difference<T, U>(
 *     target: Set<T>,
 *     source: Set<U>,
 * ): Set<T>
 * ```
 *
 * Returns a set containing all values from the target set that are not in the source set.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.difference(Sets.create([1, 2, 3]), Sets.create([2, 3, 4])); // Set([1])
 * Sets.difference(Sets.create([1, 2]), Sets.create([3, 4])); // Set([1, 2])
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, 2, 3]), Sets.difference(Sets.create([2, 3, 4]))); // Set([1])
 * pipe(Sets.create([1, 2]), Sets.difference(Sets.create([3, 4]))); // Set([1, 2])
 * ```
 *
 */
export const difference: {
    <T, U>(source: Set<U>): (target: Set<T>) => Set<T>
    <T, U>(target: Set<T>, source: Set<U>): Set<T>
} = dfdlT(<T, U>(target: Set<T>, source: Set<U>): Set<T> => {
    if (source.size === 0) return target

    let hasOverlap = false
    const result = new Set<T>()
    for (const value of target) {
        if (source.has(value as any)) {
            hasOverlap = true
        }
        else {
            result.add(value)
        }
    }

    return hasOverlap ? result : target
}, 2)
