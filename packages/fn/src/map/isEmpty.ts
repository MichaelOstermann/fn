import { dfdlT } from "@monstermann/dfdl"

/**
 * `isEmpty(map)`
 *
 * Checks if `map` is empty (has no entries).
 *
 * ```ts
 * isEmpty(new Map()); // true
 * isEmpty(new Map([["a", 1]])); // false
 * ```
 *
 * ```ts
 * pipe(new Map(), isEmpty()); // true
 * pipe(new Map([["a", 1]]), isEmpty()); // false
 * ```
 */
export const isEmpty: {
    (): <T, U>(target: ReadonlyMap<T, U>) => boolean
    <T, U>(target: ReadonlyMap<T, U>): boolean
} = dfdlT(<T, U>(target: ReadonlyMap<T, U>): boolean => {
    return target.size === 0
}, 1)
