import { dfdlT } from "../dfdl/dfdlT"

/**
 * # has
 *
 * ```ts
 * function Sets.has<T>(
 *     target: ReadonlySet<T>,
 *     value: NoInfer<T>,
 * ): boolean
 * ```
 *
 * Returns `true` if the set contains the value, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.has(Sets.create([1, 2, 3]), 2); // true
 * Sets.has(Sets.create([1, 2, 3]), 4); // false
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, 2, 3]), Sets.has(2)); // true
 * pipe(Sets.create([1, 2, 3]), Sets.has(4)); // false
 * ```
 *
 */
export const has: {
    <T>(value: NoInfer<T>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, value: NoInfer<T>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, value: NoInfer<T>): boolean => {
    return target.has(value)
}, 2)
