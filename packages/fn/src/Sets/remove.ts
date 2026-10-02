import { dfdlT } from "../dfdl/dfdlT"
import { cloneSet } from "../remmi/cloneSet"

/**
 * # remove
 *
 * ```ts
 * function Sets.remove<T>(
 *     target: ReadonlySet<T>,
 *     value: NoInfer<T>,
 * ): ReadonlySet<T>
 * ```
 *
 * Returns a set with the value removed. If the value doesn't exist in the set, returns the original set unchanged.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.remove(Sets.create([1, 2, 3]), 2); // Set([1, 3])
 * Sets.remove(Sets.create([1, 2, 3]), 4); // Set([1, 2, 3])
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, 2, 3]), Sets.remove(2)); // Set([1, 3])
 * pipe(Sets.create([1, 2, 3]), Sets.remove(4)); // Set([1, 2, 3])
 * ```
 *
 */
export const remove: {
    <T>(value: NoInfer<T>): (target: Set<T>) => Set<T>
    <T>(value: NoInfer<T>): (target: ReadonlySet<T>) => ReadonlySet<T>

    <T>(target: Set<T>, value: NoInfer<T>): Set<T>
    <T>(target: ReadonlySet<T>, value: NoInfer<T>): ReadonlySet<T>
} = dfdlT(<T>(target: Set<T>, value: NoInfer<T>): Set<T> => {
    if (!target.has(value)) return target
    target = cloneSet(target)
    target.delete(value)
    return target
}, 2)
