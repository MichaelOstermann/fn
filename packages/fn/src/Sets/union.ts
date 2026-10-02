import { dfdlT } from "../dfdl/dfdlT"

/**
 * # union
 *
 * ```ts
 * function Sets.union<T, U>(
 *     target: Set<T>,
 *     source: Set<U>,
 * ): Set<T | U>
 * ```
 *
 * Returns a set containing all values from both sets.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.union(Sets.create([1, 2]), Sets.create([2, 3, 4])); // Set([1, 2, 3, 4])
 * Sets.union(Sets.create([1, 2]), Sets.create([3, 4])); // Set([1, 2, 3, 4])
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, 2]), Sets.union(Sets.create([2, 3, 4]))); // Set([1, 2, 3, 4])
 * pipe(Sets.create([1, 2]), Sets.union(Sets.create([3, 4]))); // Set([1, 2, 3, 4])
 * ```
 *
 */
export const union: {
    <T, U>(source: Set<U>): (target: Set<T>) => Set<T | U>
    <T, U>(target: Set<T>, source: Set<U>): Set<T | U>
} = dfdlT(<T, U>(target: Set<T>, source: Set<U>): Set<T | U> => {
    if (source.size === 0) return target
    if (target.size === 0) return source

    let result: Set<T | U> | undefined
    for (const element of source) {
        if (!target.has(element as any)) {
            if (result === undefined) {
                result = new Set<T | U>()
                for (const a of target) result.add(a)
            }
            result.add(element)
        }
    }

    return result ?? target
}, 2)
