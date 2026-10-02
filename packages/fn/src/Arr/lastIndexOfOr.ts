import { dfdlT } from "../dfdlT"

/**
 * # lastIndexOfOr
 *
 * ```ts
 * function Arr.lastIndexOfOr<T, U>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 *     or: U,
 * ): number | U
 * ```
 *
 * Returns the index of the last occurrence of `value` in `target`. If `value` is not found, returns `or`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.lastIndexOfOr([1, 2, 3, 2], 2, -1); // 3
 * Arr.lastIndexOfOr([1, 2, 3], 4, -1); // -1
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 2], Arr.lastIndexOfOr(2, -1)); // 3
 * pipe([1, 2, 3], Arr.lastIndexOfOr(4, -1)); // -1
 * ```
 *
 */
export const lastIndexOfOr: {
    <T, U>(value: NoInfer<T>, or: U): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], value: NoInfer<T>, or: U): number | U
} = dfdlT(<T, U>(target: readonly T[], value: NoInfer<T>, or: U): number | U => {
    const idx = target.lastIndexOf(value)
    return idx < 0 ? or : idx
}, 3)
