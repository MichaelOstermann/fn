import { dfdlT } from "../dfdl/dfdlT"

/**
 * # indexOfOr
 *
 * ```ts
 * function Arr.indexOfOr<T, U>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 *     or: U,
 * ): number | U
 * ```
 *
 * Returns the index of the first occurrence of `value` in `target`. If `value` is not found, returns `or`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.indexOfOr([1, 2, 3, 2], 2, -1); // 1
 * Arr.indexOfOr([1, 2, 3], 4, -1); // -1
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 2], Arr.indexOfOr(2, -1)); // 1
 * pipe([1, 2, 3], Arr.indexOfOr(4, -1)); // -1
 * ```
 *
 */
export const indexOfOr: {
    <T, U>(value: NoInfer<T>, or: U): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], value: NoInfer<T>, or: U): number | U
} = dfdlT(<T, U>(target: readonly T[], value: NoInfer<T>, or: U): number | U => {
    const idx = target.indexOf(value)
    return idx < 0 ? or : idx
}, 3)
