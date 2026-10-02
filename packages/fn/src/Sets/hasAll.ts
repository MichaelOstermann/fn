import { dfdlT } from "../dfdl/dfdlT"

/**
 * # hasAll
 *
 * ```ts
 * function Sets.hasAll<T>(
 *     target: ReadonlySet<T>,
 *     values: Iterable<NoInfer<T>>,
 * ): boolean
 * ```
 *
 * Returns `true` if the set contains all values from the iterable, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.hasAll(Sets.create([1, 2, 3]), [1, 2]); // true
 * Sets.hasAll(Sets.create([1, 2, 3]), [1, 4]); // false
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, 2, 3]), Sets.hasAll([1, 2])); // true
 * pipe(Sets.create([1, 2, 3]), Sets.hasAll([1, 4])); // false
 * ```
 *
 */
export const hasAll: {
    <T>(values: Iterable<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean => {
    for (const value of values) {
        if (!target.has(value)) return false
    }
    return true
}, 2)
