import { dfdlT } from "../dfdlT"

/**
 * # size
 *
 * ```ts
 * function Sets.size<T extends ReadonlySet<unknown>>(
 *     target: T,
 * ): number
 * ```
 *
 * Returns the number of values in the set.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.size(Sets.create([1, 2, 3])); // 3
 * Sets.size(Sets.create()); // 0
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, 2, 3]), Sets.size()); // 3
 * pipe(Sets.create(), Sets.size()); // 0
 * ```
 *
 */
export const size: {
    (): <T extends ReadonlySet<unknown>>(target: T) => number
    <T extends ReadonlySet<unknown>>(target: T): number
} = dfdlT(<T extends ReadonlySet<unknown>>(target: T): number => {
    return target.size
}, 1)
