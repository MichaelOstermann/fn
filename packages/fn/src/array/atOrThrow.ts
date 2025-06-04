import type { NonNil } from "../internals/types"
import { dual } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `atOrThrow(array, offset)`
 *
 * Returns the value at the specified `offset`, throws an exception if the `offset` was out of range, or the retrieved value was nullable.
 *
 * ```ts
 * atOrThrow([1, null], -1); // Error
 * ```
 *
 * ```ts
 * pipe([1, null], atOrThrow(-1)); // Error
 * ```
 */
export const atOrThrow: {
    (offset: number): <T>(target: readonly T[]) => NonNil<T>
    <T>(target: readonly T[], offset: number): NonNil<T>
} = dual(2, <T>(target: readonly T[], offset: number): NonNil<T> => {
    const value = target.at(offset)
    if (value != null) return value as NonNil<T>
    throw new FnError("Array.atOrThrow: No value found.", [target, offset])
})
