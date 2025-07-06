import type { NonNil } from "../internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `lastOrThrow(array)`
 *
 * Returns the last element of `array`, or throws an error if the array is empty.
 *
 * ```ts
 * lastOrThrow([1, 2, 3, 4]); // 4
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4], lastOrThrow()); // 4
 * ```
 */
export const lastOrThrow: {
    (): <T>(target: readonly T[]) => NonNil<T>
    <T>(target: readonly T[]): NonNil<T>
} = dfdlT(<T>(target: readonly T[]): any => {
    const value = target.at(-1)
    if (value != null) return value
    throw new FnError("Array.lastOrThrow: No value found.", [target])
}, 1)
