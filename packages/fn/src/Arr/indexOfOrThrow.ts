import { dfdlT } from "../dfdl/dfdlT"

/**
 * # indexOfOrThrow
 *
 * ```ts
 * function Arr.indexOfOrThrow<T>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 * ): number
 * ```
 *
 * Returns the index of the first occurrence of `value` in `target`. If `value` is not found, throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.indexOfOrThrow([1, 2, 3, 2], 2); // 1
 * Arr.indexOfOrThrow([1, 2, 3], 4); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 2], Arr.indexOfOrThrow(2)); // 1
 * pipe([1, 2, 3], Arr.indexOfOrThrow(4)); // throws FnError
 * ```
 *
 */
export const indexOfOrThrow: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => number
    <T>(target: readonly T[], value: NoInfer<T>): number
} = dfdlT(<T>(target: readonly T[], value: NoInfer<T>): number => {
    const idx = target.indexOf(value)
    if (idx < 0) throw new Error("Array.indexOf: No value found.")
    return idx
}, 2)
