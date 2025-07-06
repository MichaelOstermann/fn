import { dfdlT } from "@monstermann/dfdl"

/**
 * `difference(target, source)`
 *
 * Returns a new set containing all values from the `target` set that are not present in the `source` set.
 *
 * ```ts
 * difference(new Set([1, 2, 3]), new Set([2, 3, 4])); // Set([1])
 * difference(new Set([1, 2]), new Set([3, 4])); // Set([1, 2])
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2, 3]), difference(new Set([2, 3, 4]))); // Set([1])
 * pipe(new Set([1, 2]), difference(new Set([3, 4]))); // Set([1, 2])
 * ```
 */
export const difference: {
    <T, U>(source: Set<U>): (target: Set<T>) => Set<T>
    <T, U>(target: Set<T>, source: Set<U>): Set<T>
} = dfdlT(<T, U>(target: Set<T>, source: Set<U>): Set<T> => {
    if (source.size === 0) return target

    for (const value of target) {
        if (source.has(value as any)) {
            const result = new Set<T>()
            for (const value of target) {
                if (source.has(value as any)) continue
                result.add(value)
            }
            return result
        }
    }

    return target
}, 2)
