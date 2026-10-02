import { dfdlT } from "../dfdlT"

/**
 * # isSubsetOf
 *
 * ```ts
 * function Sets.isSubsetOf<T>(
 *     target: ReadonlySet<T>,
 *     source: ReadonlySet<NoInfer<T>>,
 * ): boolean
 * ```
 *
 * Returns `true` if all values in the target set are also in the source set, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.isSubsetOf(Sets.create([1, 2]), Sets.create([1, 2, 3])); // true
 * Sets.isSubsetOf(Sets.create([1, 4]), Sets.create([1, 2, 3])); // false
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, 2]), Sets.isSubsetOf(Sets.create([1, 2, 3]))); // true
 * pipe(Sets.create([1, 4]), Sets.isSubsetOf(Sets.create([1, 2, 3]))); // false
 * ```
 *
 */
export const isSubsetOf: {
    <T>(source: ReadonlySet<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean => {
    if (target.size > source.size) return false
    for (const value of target) {
        if (!source.has(value)) return false
    }
    return true
}, 2)
