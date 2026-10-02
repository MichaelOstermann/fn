import { dfdlT } from "../dfdl/dfdlT"
import { cloneSet } from "../remmi/cloneSet"

/**
 * # add
 *
 * ```ts
 * function Sets.add<T>(
 *     target: ReadonlySet<T>,
 *     value: NoInfer<T>,
 * ): ReadonlySet<T>
 * ```
 *
 * Returns a set with the value added. If the value already exists in the set, returns the original set unchanged.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.add(Sets.create([1, 2]), 3); // Set([1, 2, 3])
 * Sets.add(Sets.create([1, 2]), 2); // Set([1, 2])
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, 2]), Sets.add(3)); // Set([1, 2, 3])
 * pipe(Sets.create([1, 2]), Sets.add(2)); // Set([1, 2])
 * ```
 *
 */
export const add: {
    <T>(value: NoInfer<T>): (target: Set<T>) => Set<T>
    <T>(value: NoInfer<T>): (target: ReadonlySet<T>) => ReadonlySet<T>

    <T>(target: Set<T>, value: NoInfer<T>): Set<T>
    <T>(target: ReadonlySet<T>, value: NoInfer<T>): ReadonlySet<T>
} = dfdlT(<T>(target: Set<T>, value: NoInfer<T>): Set<T> => {
    if (target.has(value)) return target
    target = cloneSet(target)
    target.add(value)
    return target
}, 2)
