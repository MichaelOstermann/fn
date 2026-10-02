import { dfdlT } from "../dfdlT"

/**
 * # hasNone
 *
 * ```ts
 * function Sets.hasNone<T>(
 *     target: ReadonlySet<T>,
 *     values: Iterable<NoInfer<T>>,
 * ): boolean
 * ```
 *
 * Returns `true` if the set contains none of the values from the iterable, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.hasNone(Sets.create([1, 2, 3]), [4, 5]); // true
 * Sets.hasNone(Sets.create([1, 2, 3]), [3, 4]); // false
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, 2, 3]), Sets.hasNone([4, 5])); // true
 * pipe(Sets.create([1, 2, 3]), Sets.hasNone([3, 4])); // false
 * ```
 *
 */
export const hasNone: {
    <T>(values: Iterable<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean => {
    for (const value of values) {
        if (target.has(value)) return false
    }
    return true
}, 2)
