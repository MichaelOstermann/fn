import { dfdlT } from "@monstermann/dfdl"

/**
 * `symmetricDifference(target, source)`
 *
 * Returns a new set containing values that exist in either the `target` set or the `source` set, but not in both (exclusive or).
 *
 * ```ts
 * symmetricDifference(new Set([1, 2, 3]), new Set([3, 4, 5])); // Set([1, 2, 4, 5])
 * symmetricDifference(new Set([1, 2]), new Set([3, 4])); // Set([1, 2, 3, 4])
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2, 3]), symmetricDifference(new Set([3, 4, 5]))); // Set([1, 2, 4, 5])
 * pipe(new Set([1, 2]), symmetricDifference(new Set([3, 4]))); // Set([1, 2, 3, 4])
 * ```
 */
export const symmetricDifference: {
    <T, U>(source: Set<U>): (target: Set<T>) => Set<T | U>
    <T, U>(target: Set<T>, source: Set<U>): Set<T | U>
} = dfdlT(<T, U>(target: Set<T>, source: Set<U>): Set<T | U> => {
    if (source.size === 0) return target
    if (target.size === 0) return source

    let hasChanges = false

    for (const a of target) {
        if (!source.has(a as any)) {
            hasChanges = true
            break
        }
    }

    if (!hasChanges) {
        for (const b of source) {
            if (!target.has(b as any)) {
                hasChanges = true
                break
            }
        }
    }

    if (!hasChanges) {
        return new Set<T | U>()
    }

    const result = new Set<T | U>()

    for (const a of target) {
        if (!source.has(a as any)) result.add(a)
    }

    for (const b of source) {
        if (!target.has(b as any)) result.add(b)
    }

    return result
}, 2)
