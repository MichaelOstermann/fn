import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * `removeOr(target, value, or)`
 *
 * Removes a `value` from the `target` set and returns a new set. If the value doesn't exist in the set, returns the `or` value instead.
 *
 * ```ts
 * removeOr(new Set([1, 2, 3]), 2, null); // Set([1, 3])
 * removeOr(new Set([1, 2, 3]), 4, null); // null
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2, 3]), removeOr(2, null)); // Set([1, 3])
 * pipe(new Set([1, 2, 3]), removeOr(4, null)); // null
 * ```
 */
export const removeOr: {
    <T, U>(value: NoInfer<T>, or: U): (target: ReadonlySet<T>) => Set<T> | U
    <T, U>(target: ReadonlySet<T>, value: NoInfer<T>, or: U): Set<T> | U
} = dfdlT(<T, U>(target: ReadonlySet<T>, value: NoInfer<T>, or: U): Set<T> | U => {
    if (!target.has(value)) return or
    const result = cloneSet(target)
    result.delete(value)
    return result
}, 3)
