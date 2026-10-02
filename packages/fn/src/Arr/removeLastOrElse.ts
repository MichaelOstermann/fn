import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"

/**
 * # removeLastOrElse
 *
 * ```ts
 * function Arr.removeLastOrElse<T, U>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 *     orElse: (target: readonly NoInfer<T>[]) => U,
 * ): T[] | U
 * ```
 *
 * Removes the last occurrence of `value` from `target` array. If the value is not found, calls the `orElse` function with the original array and returns its result.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.removeLastOrElse([1, 2, 3, 2], 2, () => []); // [1, 2, 3]
 * Arr.removeLastOrElse([1, 2, 3], 4, (arr) => arr); // [1, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 2],
 *     Arr.removeLastOrElse(2, () => []),
 * ); // [1, 2, 3]
 *
 * pipe(
 *     [1, 2, 3],
 *     Arr.removeLastOrElse(4, (arr) => arr),
 * ); // [1, 2, 3]
 * ```
 *
 */
export const removeLastOrElse: {
    <T, U>(value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): (target: readonly T[]) => T[] | U
    <T, U>(target: readonly T[], value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): T[] | U
} = dfdlT(<T, U>(target: readonly T[], value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): T[] | U => {
    const idx = target.lastIndexOf(value)
    if (idx < 0) return orElse(target)
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 3)
