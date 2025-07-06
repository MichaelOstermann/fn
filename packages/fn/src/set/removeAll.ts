import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * `removeAll(target, values)`
 *
 * Removes all `values` from an iterable from the `target` set and returns a new set. Only values that exist in the set are removed.
 *
 * ```ts
 * removeAll(new Set([1, 2, 3, 4]), [2, 3]); // Set([1, 4])
 * removeAll(new Set([1, 2, 3]), [4, 5]); // Set([1, 2, 3])
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2, 3, 4]), removeAll([2, 3])); // Set([1, 4])
 * pipe(new Set([1, 2, 3]), removeAll([4, 5])); // Set([1, 2, 3])
 * ```
 */
export const removeAll: {
    <T>(values: Iterable<NoInfer<T>>): (target: Set<T>) => Set<T>
    <T>(values: Iterable<NoInfer<T>>): (target: ReadonlySet<T>) => ReadonlySet<T>

    <T>(target: Set<T>, values: Iterable<NoInfer<T>>): Set<T>
    <T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): ReadonlySet<T>
} = dfdlT(<T>(target: Set<T>, values: Iterable<NoInfer<T>>): Set<T> => {
    let result
    for (const value of values) {
        if (!target.has(value)) continue
        result ??= cloneSet(target)
        result.delete(value)
    }
    return result ?? target
}, 2)
