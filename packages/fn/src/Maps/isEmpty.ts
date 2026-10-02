import { dfdlT } from "../dfdl/dfdlT"

/**
 * # isEmpty
 *
 * ```ts
 * function Maps.isEmpty<T, U>(target: ReadonlyMap<T, U>): boolean
 * ```
 *
 * Checks whether the map is empty (contains no entries).
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.isEmpty(new Map()); // true
 * Maps.isEmpty(new Map([["a", 1]])); // false
 * ```
 *
 * ```ts [data-last]
 * import { Maps } from "@monstermann/fn";
 *
 * pipe(new Map(), Maps.isEmpty()); // true
 * pipe(new Map([["a", 1]]), Maps.isEmpty()); // false
 * ```
 *
 */
export const isEmpty: {
    (): <T, U>(target: ReadonlyMap<T, U>) => boolean
    <T, U>(target: ReadonlyMap<T, U>): boolean
} = dfdlT(<T, U>(target: ReadonlyMap<T, U>): boolean => {
    return target.size === 0
}, 1)
