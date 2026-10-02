import { dfdlT } from "../dfdl/dfdlT"

/**
 * # isSupersetOf
 *
 * ```ts
 * function Sets.isSupersetOf<T>(
 *     target: ReadonlySet<T>,
 *     source: ReadonlySet<NoInfer<T>>,
 * ): boolean
 * ```
 *
 * Returns `true` if the target set contains all values from the source set, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.isSupersetOf(Sets.create([1, 2, 3]), Sets.create([1, 2])); // true
 * Sets.isSupersetOf(Sets.create([1, 2, 3]), Sets.create([1, 4])); // false
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, 2, 3]), Sets.isSupersetOf(Sets.create([1, 2]))); // true
 * pipe(Sets.create([1, 2, 3]), Sets.isSupersetOf(Sets.create([1, 4]))); // false
 * ```
 *
 */
export const isSupersetOf: {
    <T>(source: ReadonlySet<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean => {
    if (target.size < source.size) return false
    for (const value of source) {
        if (!target.has(value)) return false
    }
    return true
}, 2)
