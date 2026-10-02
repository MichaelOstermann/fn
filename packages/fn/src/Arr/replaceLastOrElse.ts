import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"

/**
 * # replaceLastOrElse
 *
 * ```ts
 * function Arr.replaceLastOrElse<T, U>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 *     replacement: NoInfer<T>,
 *     orElse: (target: readonly NoInfer<T>[]) => U,
 * ): readonly T[] | U
 * ```
 *
 * Replaces the last occurrence of `value` in `target` with `replacement`. If `value` is not found, calls `orElse` with the original array.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.replaceLastOrElse([1, 2, 3, 2], 2, 9, () => []); // [1, 2, 3, 9]
 * Arr.replaceLastOrElse([1, 2, 3], 4, 9, (arr) => arr); // [1, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 2],
 *     Arr.replaceLastOrElse(2, 9, () => []),
 * ); // [1, 2, 3, 9]
 *
 * pipe(
 *     [1, 2, 3],
 *     Arr.replaceLastOrElse(4, 9, (arr) => arr),
 * ); // [1, 2, 3]
 * ```
 *
 */
export const replaceLastOrElse: {
    <T, U>(value: NoInfer<T>, replacement: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): (target: T[]) => T[] | U
    <T, U>(value: NoInfer<T>, replacement: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): T[] | U
    <T, U>(target: readonly T[], value: NoInfer<T>, replacement: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): readonly T[] | U
} = dfdlT(<T, U>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): T[] | U => {
    if (value === replacement) return target
    const idx = target.lastIndexOf(value)
    if (idx === -1) return orElse(target)
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 4)
