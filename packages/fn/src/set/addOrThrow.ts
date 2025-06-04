import { dual } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"
import { FnError } from "../function/FnError"

/**
 * `addOrThrow(target, value)`
 *
 * Adds a `value` to the `target` set and returns a new set. If the value already exists in the set, throws an error.
 *
 * ```ts
 * addOrThrow(new Set([1, 2]), 3); // Set([1, 2, 3])
 * addOrThrow(new Set([1, 2]), 2); // throws FnError
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2]), addOrThrow(3)); // Set([1, 2, 3])
 * pipe(new Set([1, 2]), addOrThrow(2)); // throws FnError
 * ```
 */
export const addOrThrow: {
    <T>(value: NoInfer<T>): (target: ReadonlySet<T>) => Set<T>
    <T>(target: ReadonlySet<T>, value: NoInfer<T>): Set<T>
} = dual(2, <T>(target: ReadonlySet<T>, value: NoInfer<T>): Set<T> => {
    if (target.has(value)) throw new FnError("Set.addOrThrow: Value already exists.", [target, value])
    const result = cloneSet(target)
    result.add(value)
    return result
})
