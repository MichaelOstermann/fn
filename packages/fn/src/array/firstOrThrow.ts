import type { NonNil } from "../internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `firstOrThrow(array)`
 *
 * Returns the first element of `array`, or throws an error if the array is empty.
 *
 * ```ts
 * firstOrThrow([1, 2, 3, 4]); // 1
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4], firstOrThrow()); // 1
 * ```
 */
export const firstOrThrow: {
    (): <T>(target: readonly T[]) => NonNil<T>
    <T>(target: readonly T[]): NonNil<T>
} = dfdlT(<T>(target: readonly T[]): any => {
    const value = target[0]
    if (value != null) return value
    throw new FnError("Array.firstOrThrow: No value found.", [target])
}, 1)
