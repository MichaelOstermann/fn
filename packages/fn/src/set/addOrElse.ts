import { dual } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * `addOrElse(target, value, orElse)`
 *
 * Adds a `value` to the `target` set and returns a new set. If the value already exists in the set, calls the `orElse` function with the target set and returns its result.
 *
 * ```ts
 * addOrElse(new Set([1, 2]), 3, (set) => set.size); // Set([1, 2, 3])
 * addOrElse(new Set([1, 2]), 2, (set) => set.size); // 2
 * ```
 *
 * ```ts
 * pipe(
 *     new Set([1, 2]),
 *     addOrElse(3, (set) => set.size),
 * ); // Set([1, 2, 3])
 *
 * pipe(
 *     new Set([1, 2]),
 *     addOrElse(2, (set) => set.size),
 * ); // 2
 * ```
 */
export const addOrElse: {
    <T, U>(value: NoInfer<T>, orElse: (target: ReadonlySet<NoInfer<T>>) => U): (target: ReadonlySet<T>) => Set<T> | U
    <T, U>(target: ReadonlySet<T>, value: NoInfer<T>, orElse: (target: ReadonlySet<NoInfer<T>>) => U): Set<T> | U
} = dual(3, <T, U>(target: ReadonlySet<T>, value: NoInfer<T>, orElse: (target: ReadonlySet<NoInfer<T>>) => U): Set<T> | U => {
    if (target.has(value)) return orElse(target)
    const result = cloneSet(target)
    result.add(value)
    return result
})
