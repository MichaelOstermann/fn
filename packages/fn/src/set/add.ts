import { dual } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * `add(target, value)`
 *
 * Adds a `value` to the `target` set and returns a new set.
 *
 * ```ts
 * add(new Set([1, 2]), 3); // Set([1, 2, 3])
 * add(new Set([1, 2]), 2); // Set([1, 2])
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2]), add(3)); // Set([1, 2, 3])
 * pipe(new Set([1, 2]), add(2)); // Set([1, 2])
 * ```
 */
export const add: {
    <T>(value: NoInfer<T>): (target: Set<T>) => Set<T>
    <T>(value: NoInfer<T>): (target: ReadonlySet<T>) => ReadonlySet<T>

    <T>(target: Set<T>, value: NoInfer<T>): Set<T>
    <T>(target: ReadonlySet<T>, value: NoInfer<T>): ReadonlySet<T>
} = dual(2, <T>(target: Set<T>, value: NoInfer<T>): Set<T> => {
    if (target.has(value)) return target
    target = cloneSet(target)
    target.add(value)
    return target
})
