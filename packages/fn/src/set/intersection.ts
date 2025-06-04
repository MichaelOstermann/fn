import { dual } from "@monstermann/dfdl"

/**
 * `intersection(target, source)`
 *
 * Returns a new set containing only the values that exist in both the `target` set and the `source` set.
 *
 * ```ts
 * intersection(new Set([1, 2, 3]), new Set([2, 3, 4])); // Set([2, 3])
 * intersection(new Set([1, 2]), new Set([3, 4])); // Set([])
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2, 3]), intersection(new Set([2, 3, 4]))); // Set([2, 3])
 * pipe(new Set([1, 2]), intersection(new Set([3, 4]))); // Set([])
 * ```
 */
export const intersection: {
    <T, U>(source: Set<U>): (target: Set<T>) => Set<T | U>
    <T, U>(target: Set<T>, source: Set<U>): Set<T | U>
} = dual(2, <T, U>(target: Set<T>, source: Set<U>): Set<T | U> => {
    if (target.size === 0) return target
    if (source.size === 0) return source

    for (const value of target) {
        if (!source.has(value as any)) {
            const result = new Set<T>()
            for (const value of target) {
                if (!source.has(value as any)) continue
                result.add(value)
            }
            return result
        }
    }

    return target
})
