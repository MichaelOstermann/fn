import { dual } from "@monstermann/dfdl"

/**
 * `union(target, source)`
 *
 * Returns a new set containing all unique values from both the `target` set and the `source` set.
 *
 * ```ts
 * union(new Set([1, 2]), new Set([2, 3, 4])); // Set([1, 2, 3, 4])
 * union(new Set([1, 2]), new Set([3, 4])); // Set([1, 2, 3, 4])
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2]), union(new Set([2, 3, 4]))); // Set([1, 2, 3, 4])
 * pipe(new Set([1, 2]), union(new Set([3, 4]))); // Set([1, 2, 3, 4])
 * ```
 */
export const union: {
    <T, U>(source: Set<U>): (target: Set<T>) => Set<T | U>
    <T, U>(target: Set<T>, source: Set<U>): Set<T | U>
} = dual(2, <T, U>(target: Set<T>, source: Set<U>): Set<T | U> => {
    if (source.size === 0) return target
    if (target.size === 0) return source

    for (const element of source) {
        if (!target.has(element as any)) {
            const result = new Set<T | U>()
            for (const a of target) result.add(a)
            for (const b of source) result.add(b)
            return result
        }
    }

    return target
})
