import { dfdlT } from "../dfdlT"

/**
 * # hasAny
 *
 * ```ts
 * function Sets.hasAny<T>(
 *     target: ReadonlySet<T>,
 *     values: Iterable<NoInfer<T>>,
 * ): boolean
 * ```
 *
 * Returns `true` if the set contains at least one value from the iterable, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.hasAny(Sets.create([1, 2, 3]), [3, 4]); // true
 * Sets.hasAny(Sets.create([1, 2, 3]), [4, 5]); // false
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, 2, 3]), Sets.hasAny([3, 4])); // true
 * pipe(Sets.create([1, 2, 3]), Sets.hasAny([4, 5])); // false
 * ```
 *
 */
export const hasAny: {
    <T>(values: Iterable<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean => {
    for (const value of values) {
        if (target.has(value)) return true
    }
    return false
}, 2)
