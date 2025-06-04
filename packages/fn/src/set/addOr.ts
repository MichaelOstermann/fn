import { dual } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * `addOr(target, value, or)`
 *
 * Adds a `value` to the `target` set and returns a new set. If the value already exists in the set, returns the `or` value instead.
 *
 * ```ts
 * addOr(new Set([1, 2]), 3, null); // Set([1, 2, 3])
 * addOr(new Set([1, 2]), 2, null); // null
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2]), addOr(3, null)); // Set([1, 2, 3])
 * pipe(new Set([1, 2]), addOr(2, null)); // null
 * ```
 */
export const addOr: {
    <T, U>(value: NoInfer<T>, or: U): (target: ReadonlySet<T>) => Set<T> | U
    <T, U>(target: ReadonlySet<T>, value: NoInfer<T>, or: U): Set<T> | U
} = dual(3, <T, U>(target: ReadonlySet<T>, value: NoInfer<T>, or: U): Set<T> | U => {
    if (target.has(value)) return or
    const result = cloneSet(target)
    result.add(value)
    return result
})
