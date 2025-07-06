import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * `removeOrElse(target, value, orElse)`
 *
 * Removes a `value` from the `target` set and returns a new set. If the value doesn't exist in the set, calls the `orElse` function with the target set and returns its result.
 *
 * ```ts
 * removeOrElse(new Set([1, 2, 3]), 2, (set) => set.size); // Set([1, 3])
 * removeOrElse(new Set([1, 2, 3]), 4, (set) => set.size); // 3
 * ```
 *
 * ```ts
 * pipe(
 *     new Set([1, 2, 3]),
 *     removeOrElse(2, (set) => set.size),
 * ); // Set([1, 3])
 *
 * pipe(
 *     new Set([1, 2, 3]),
 *     removeOrElse(4, (set) => set.size),
 * ); // 3
 * ```
 */
export const removeOrElse: {
    <T, U>(value: NoInfer<T>, orElse: (target: ReadonlySet<NoInfer<T>>) => U): (target: ReadonlySet<T>) => Set<T> | U
    <T, U>(target: ReadonlySet<T>, value: NoInfer<T>, orElse: (target: ReadonlySet<NoInfer<T>>) => U): Set<T> | U
} = dfdlT(<T, U>(target: ReadonlySet<T>, value: NoInfer<T>, orElse: (target: ReadonlySet<NoInfer<T>>) => U): Set<T> | U => {
    if (!target.has(value)) return orElse(target)
    const result = cloneSet(target)
    result.delete(value)
    return result
}, 3)
