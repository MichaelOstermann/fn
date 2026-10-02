import { dfdlT } from "../dfdlT"

/**
 * # isShallowEqual
 *
 * ```ts
 * function Sets.isShallowEqual<T>(
 *     target: ReadonlySet<T>,
 *     source: ReadonlySet<NoInfer<T>>,
 * ): boolean
 * ```
 *
 * Returns `true` if both sets contain the same values, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.isShallowEqual(Sets.create([1, 2, 3]), Sets.create([3, 2, 1])); // true
 * Sets.isShallowEqual(Sets.create([1, 2]), Sets.create([1, 2, 3])); // false
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, 2, 3]), Sets.isShallowEqual(Sets.create([3, 2, 1]))); // true
 * pipe(Sets.create([1, 2]), Sets.isShallowEqual(Sets.create([1, 2, 3]))); // false
 * ```
 *
 */
export const isShallowEqual: {
    <T>(source: ReadonlySet<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean => {
    if (target.size !== source.size) return false
    for (const a of target) {
        if (!source.has(a)) return false
    }
    for (const b of source) {
        if (!target.has(b)) return false
    }
    return true
}, 2)
