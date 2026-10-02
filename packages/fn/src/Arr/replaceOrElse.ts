import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"

/**
 * # replaceOrElse
 *
 * ```ts
 * function Arr.replaceOrElse<T, U>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 *     replacement: NoInfer<T>,
 *     orElse: (target: readonly NoInfer<T>[]) => U,
 * ): readonly T[] | U
 * ```
 *
 * Replaces the first occurrence of `value` in `target` with `replacement`. If `value` is not found, calls `orElse` with the original array.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.replaceOrElse([1, 2, 3, 2], 2, 9, () => []); // [1, 9, 3, 2]
 * Arr.replaceOrElse([1, 2, 3], 4, 9, (arr) => arr); // [1, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 2],
 *     Arr.replaceOrElse(2, 9, () => []),
 * ); // [1, 9, 3, 2]
 *
 * pipe(
 *     [1, 2, 3],
 *     Arr.replaceOrElse(4, 9, (arr) => arr),
 * ); // [1, 2, 3]
 * ```
 *
 */
export const replaceOrElse: {
    <T, U>(value: NoInfer<T>, replacement: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): (target: T[]) => T[] | U
    <T, U>(value: NoInfer<T>, replacement: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): T[] | U
    <T, U>(target: readonly T[], value: NoInfer<T>, replacement: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): readonly T[] | U
} = dfdlT(<T, U>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): T[] | U => {
    if (value === replacement) return target
    const idx = target.indexOf(value)
    if (idx === -1) return orElse(target)
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 4)
