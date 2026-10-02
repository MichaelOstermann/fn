import { cloneSet } from "../cloneSet"
import { dfdlT } from "../dfdlT"

/**
 * # removeAll
 *
 * ```ts
 * function Sets.removeAll<T>(
 *     target: ReadonlySet<T>,
 *     values: Iterable<NoInfer<T>>,
 * ): ReadonlySet<T>
 * ```
 *
 * Returns a set with all values from the iterable removed. Values that don't exist in the set are skipped.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.removeAll(Sets.create([1, 2, 3, 4]), [2, 3]); // Set([1, 4])
 * Sets.removeAll(Sets.create([1, 2, 3]), [4, 5]); // Set([1, 2, 3])
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, 2, 3, 4]), Sets.removeAll([2, 3])); // Set([1, 4])
 * pipe(Sets.create([1, 2, 3]), Sets.removeAll([4, 5])); // Set([1, 2, 3])
 * ```
 *
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
