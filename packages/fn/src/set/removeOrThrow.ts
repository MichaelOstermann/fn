import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"
import { FnError } from "../function/FnError"

/**
 * `removeOrThrow(target, value)`
 *
 * Removes a `value` from the `target` set and returns a new set. If the value doesn't exist in the set, throws an error.
 *
 * ```ts
 * removeOrThrow(new Set([1, 2, 3]), 2); // Set([1, 3])
 * removeOrThrow(new Set([1, 2, 3]), 4); // throws FnError
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2, 3]), removeOrThrow(2)); // Set([1, 3])
 * pipe(new Set([1, 2, 3]), removeOrThrow(4)); // throws FnError
 * ```
 */
export const removeOrThrow: {
    <T>(value: NoInfer<T>): (target: ReadonlySet<T>) => Set<T>
    <T>(target: ReadonlySet<T>, value: NoInfer<T>): Set<T>
} = dfdlT(<T>(target: ReadonlySet<T>, value: NoInfer<T>): Set<T> => {
    if (!target.has(value)) throw new FnError("Set.removeOrThrow: Value does not exist.", [target, value])
    const result = cloneSet(target)
    result.delete(value)
    return result
}, 2)
