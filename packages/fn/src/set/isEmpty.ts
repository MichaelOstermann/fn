import { dfdlT } from "@monstermann/dfdl"

/**
 * `isEmpty(target)`
 *
 * Checks if the `target` set is empty (contains no values). Returns `true` if the set has no elements, `false` otherwise.
 *
 * ```ts
 * isEmpty(new Set()); // true
 * isEmpty(new Set([1, 2, 3])); // false
 * ```
 *
 * ```ts
 * pipe(new Set(), isEmpty()); // true
 * pipe(new Set([1, 2, 3]), isEmpty()); // false
 * ```
 */
export const isEmpty: {
    (): <T extends ReadonlySet<unknown>>(target: T) => boolean
    <T extends ReadonlySet<unknown>>(target: T): boolean
} = dfdlT(<T extends ReadonlySet<unknown>>(target: T): boolean => {
    return target.size === 0
}, 1)
