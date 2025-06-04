import { dual } from "@monstermann/dfdl"

/**
 * `indexOfOr(target, value, or)`
 *
 * Returns the index of the first occurrence of `value` in `target`. If `value` is not found, returns `or`.
 *
 * ```ts
 * indexOfOr([1, 2, 3, 2], 2, -1); // 1
 * indexOfOr([1, 2, 3], 4, -1); // -1
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 2], indexOfOr(2, -1)); // 1
 * pipe([1, 2, 3], indexOfOr(4, -1)); // -1
 * ```
 */
export const indexOfOr: {
    <T, U>(value: NoInfer<T>, or: U): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], value: NoInfer<T>, or: U): number | U
} = dual(3, <T, U>(target: readonly T[], value: NoInfer<T>, or: U): number | U => {
    const idx = target.indexOf(value)
    return idx < 0 ? or : idx
})
