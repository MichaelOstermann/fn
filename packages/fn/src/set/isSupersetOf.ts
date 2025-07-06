import { dfdlT } from "@monstermann/dfdl"

/**
 * `isSupersetOf(target, source)`
 *
 * Checks if the `target` set is a superset of the `source` set (i.e., all values in source exist in target). Returns `true` if target is a superset of source, `false` otherwise.
 *
 * ```ts
 * isSupersetOf(new Set([1, 2, 3]), new Set([1, 2])); // true
 * isSupersetOf(new Set([1, 2, 3]), new Set([1, 4])); // false
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2, 3]), isSupersetOf(new Set([1, 2]))); // true
 * pipe(new Set([1, 2, 3]), isSupersetOf(new Set([1, 4]))); // false
 * ```
 */
export const isSupersetOf: {
    <T>(source: ReadonlySet<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean => {
    if (target.size < source.size) return false
    for (const value of source) {
        if (!target.has(value)) return false
    }
    return true
}, 2)
