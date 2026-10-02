import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"

/**
 * # removeLastOr
 *
 * ```ts
 * function Arr.removeLastOr<T, U>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 *     or: U,
 * ): T[] | U
 * ```
 *
 * Removes the last occurrence of `value` from `target` array. If the value is not found, returns the fallback value `or`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.removeLastOr([1, 2, 3, 2], 2, []); // [1, 2, 3]
 * Arr.removeLastOr([1, 2, 3], 4, []); // []
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 2], Arr.removeLastOr(2, [])); // [1, 2, 3]
 * pipe([1, 2, 3], Arr.removeLastOr(4, [])); // []
 * ```
 *
 */
export const removeLastOr: {
    <T, U>(value: NoInfer<T>, or: U): (target: readonly T[]) => T[] | U
    <T, U>(target: readonly T[], value: NoInfer<T>, or: U): T[] | U
} = dfdlT(<T, U>(target: readonly T[], value: NoInfer<T>, or: U): T[] | U => {
    const idx = target.lastIndexOf(value)
    if (idx < 0) return or
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 3)
