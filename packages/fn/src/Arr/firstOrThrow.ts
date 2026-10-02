import { dfdlT } from "../dfdlT"

/**
 * # firstOrThrow
 *
 * ```ts
 * function Arr.firstOrThrow<T>(
 *     target: readonly T[],
 * ): Exclude<T, null | undefined>
 * ```
 *
 * Returns the first element of `array`, or throws an error if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.firstOrThrow([1, 2, 3, 4]); // 1
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 4], Arr.firstOrThrow()); // 1
 * ```
 *
 */
export const firstOrThrow: {
    (): <T>(target: readonly T[]) => Exclude<T, null | undefined>
    <T>(target: readonly T[]): Exclude<T, null | undefined>
} = dfdlT(<T>(target: readonly T[]): any => {
    const value = target[0]
    if (value != null) return value
    throw new Error("Array.firstOrThrow: No value found.")
}, 1)
