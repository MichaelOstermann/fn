import { dual } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * `addAll(target, values)`
 *
 * Adds all `values` from an iterable to the `target` set and returns a new set.
 *
 * ```ts
 * addAll(new Set([1, 2]), [3, 4]); // Set([1, 2, 3, 4])
 * addAll(new Set([1, 2]), [2, 3]); // Set([1, 2, 3])
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2]), addAll([3, 4])); // Set([1, 2, 3, 4])
 * pipe(new Set([1, 2]), addAll([2, 3])); // Set([1, 2, 3])
 * ```
 */
export const addAll: {
    <T>(values: Iterable<NoInfer<T>>): (target: Set<T>) => Set<T>
    <T>(values: Iterable<NoInfer<T>>): (target: ReadonlySet<T>) => ReadonlySet<T>

    <T>(target: Set<T>, values: Iterable<NoInfer<T>>): Set<T>
    <T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): ReadonlySet<T>
} = dual(2, <T>(target: Set<T>, values: Iterable<NoInfer<T>>): Set<T> => {
    let result
    for (const value of values) {
        if (target.has(value)) continue
        result ??= cloneSet(target)
        result.add(value)
    }
    return result ?? target
})
