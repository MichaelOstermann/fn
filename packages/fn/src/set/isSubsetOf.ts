import { dual } from "@monstermann/dfdl"

/**
 * `isSubsetOf(target, source)`
 *
 * Checks if the `target` set is a subset of the `source` set (i.e., all values in target exist in source). Returns `true` if target is a subset of source, `false` otherwise.
 *
 * ```ts
 * isSubsetOf(new Set([1, 2]), new Set([1, 2, 3])); // true
 * isSubsetOf(new Set([1, 4]), new Set([1, 2, 3])); // false
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2]), isSubsetOf(new Set([1, 2, 3]))); // true
 * pipe(new Set([1, 4]), isSubsetOf(new Set([1, 2, 3]))); // false
 * ```
 */
export const isSubsetOf: {
    <T>(source: ReadonlySet<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean
} = dual(2, <T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean => {
    if (target.size > source.size) return false
    for (const value of target) {
        if (!source.has(value)) return false
    }
    return true
})
