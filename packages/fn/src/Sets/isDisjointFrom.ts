import { dfdlT } from "../dfdl/dfdlT"

/**
 * # isDisjointFrom
 *
 * ```ts
 * function Sets.isDisjointFrom<T>(
 *     target: ReadonlySet<T>,
 *     source: ReadonlySet<NoInfer<T>>,
 * ): boolean
 * ```
 *
 * Returns `true` if the sets have no values in common, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.isDisjointFrom(Sets.create([1, 2]), Sets.create([3, 4])); // true
 * Sets.isDisjointFrom(Sets.create([1, 2]), Sets.create([2, 3])); // false
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, 2]), Sets.isDisjointFrom(Sets.create([3, 4]))); // true
 * pipe(Sets.create([1, 2]), Sets.isDisjointFrom(Sets.create([2, 3]))); // false
 * ```
 *
 */
export const isDisjointFrom: {
    <T>(source: ReadonlySet<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean => {
    for (const value of target) {
        if (source.has(value)) return false
    }
    return true
}, 2)
