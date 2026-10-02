import { dfdlT } from "../dfdlT"

/**
 * # isEmpty
 *
 * ```ts
 * function Sets.isEmpty<T extends ReadonlySet<unknown>>(
 *     target: T,
 * ): boolean
 * ```
 *
 * Returns `true` if the set contains no values, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.isEmpty(Sets.create()); // true
 * Sets.isEmpty(Sets.create([1, 2, 3])); // false
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create(), Sets.isEmpty()); // true
 * pipe(Sets.create([1, 2, 3]), Sets.isEmpty()); // false
 * ```
 *
 */
export const isEmpty: {
    (): <T extends ReadonlySet<unknown>>(target: T) => boolean
    <T extends ReadonlySet<unknown>>(target: T): boolean
} = dfdlT(<T extends ReadonlySet<unknown>>(target: T): boolean => {
    return target.size === 0
}, 1)
