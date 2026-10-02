import { dfdlT } from "../dfdl/dfdlT"

/**
 * # atOrThrow
 *
 * ```ts
 * function Arr.atOrThrow<T>(
 *     target: readonly T[],
 *     offset: number,
 * ): Exclude<T, null | undefined>
 * ```
 *
 * Returns the value at the specified `offset`, throws an exception if the `offset` was out of range, or the retrieved value was nullable.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.atOrThrow([1, null], -1); // Error
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, null], Arr.atOrThrow(-1)); // Error
 * ```
 *
 */
export const atOrThrow: {
    (offset: number): <T>(target: readonly T[]) => Exclude<T, null | undefined>
    <T>(target: readonly T[], offset: number): Exclude<T, null | undefined>
} = dfdlT(<T>(target: readonly T[], offset: number): Exclude<T, null | undefined> => {
    const value = target.at(offset)
    if (value != null) return value as Exclude<T, null | undefined>
    throw new Error("Array.atOrThrow: No value found.")
}, 2)
