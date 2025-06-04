import { dual } from "@monstermann/dfdl"

/**
 * `isDisjointFrom(target, source)`
 *
 * Checks if the `target` set is disjoint from the `source` set (i.e., they share no common values). Returns `true` if the sets have no intersection, `false` otherwise.
 *
 * ```ts
 * isDisjointFrom(new Set([1, 2]), new Set([3, 4])); // true
 * isDisjointFrom(new Set([1, 2]), new Set([2, 3])); // false
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2]), isDisjointFrom(new Set([3, 4]))); // true
 * pipe(new Set([1, 2]), isDisjointFrom(new Set([2, 3]))); // false
 * ```
 */
export const isDisjointFrom: {
    <T>(source: ReadonlySet<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean
} = dual(2, <T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean => {
    for (const value of target) {
        if (source.has(value)) return false
    }
    return true
})
