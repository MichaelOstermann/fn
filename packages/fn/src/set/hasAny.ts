import { dual } from "@monstermann/dfdl"

/**
 * `hasAny(target, values)`
 *
 * Checks if the `target` set contains any of the specified `values` from an iterable. Returns `true` if at least one value exists, `false` otherwise.
 *
 * ```ts
 * hasAny(new Set([1, 2, 3]), [3, 4]); // true
 * hasAny(new Set([1, 2, 3]), [4, 5]); // false
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2, 3]), hasAny([3, 4])); // true
 * pipe(new Set([1, 2, 3]), hasAny([4, 5])); // false
 * ```
 */
export const hasAny: {
    <T>(values: Iterable<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean
} = dual(2, <T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean => {
    for (const value of values) {
        if (target.has(value)) return true
    }
    return false
})
