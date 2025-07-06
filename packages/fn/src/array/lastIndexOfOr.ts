import { dfdlT } from "@monstermann/dfdl"

/**
 * `lastIndexOfOr(target, value, or)`
 *
 * Returns the index of the last occurrence of `value` in `target`. If `value` is not found, returns `or`.
 *
 * ```ts
 * lastIndexOfOr([1, 2, 3, 2], 2, -1); // 3
 * lastIndexOfOr([1, 2, 3], 4, -1); // -1
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 2], lastIndexOfOr(2, -1)); // 3
 * pipe([1, 2, 3], lastIndexOfOr(4, -1)); // -1
 * ```
 */
export const lastIndexOfOr: {
    <T, U>(value: NoInfer<T>, or: U): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], value: NoInfer<T>, or: U): number | U
} = dfdlT(<T, U>(target: readonly T[], value: NoInfer<T>, or: U): number | U => {
    const idx = target.lastIndexOf(value)
    return idx < 0 ? or : idx
}, 3)
