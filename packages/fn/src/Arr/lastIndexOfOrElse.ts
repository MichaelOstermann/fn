import { dfdlT } from "../dfdl/dfdlT"

/**
 * # lastIndexOfOrElse
 *
 * ```ts
 * function Arr.lastIndexOfOrElse<T, U>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 *     orElse: (target: readonly NoInfer<T>[]) => U,
 * ): number | U
 * ```
 *
 * Returns the index of the last occurrence of `value` in `target`. If `value` is not found, calls `orElse` with the original array.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.lastIndexOfOrElse([1, 2, 3, 2], 2, () => -1); // 3
 * Arr.lastIndexOfOrElse([1, 2, 3], 4, (arr) => arr.length); // 3
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 2],
 *     Arr.lastIndexOfOrElse(2, () => -1),
 * ); // 3
 *
 * pipe(
 *     [1, 2, 3],
 *     Arr.lastIndexOfOrElse(4, (arr) => arr.length),
 * ); // 3
 * ```
 *
 */
export const lastIndexOfOrElse: {
    <T, U>(value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): number | U
} = dfdlT(<T, U>(target: readonly T[], value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): number | U => {
    const idx = target.lastIndexOf(value)
    return idx < 0 ? orElse(target) : idx
}, 3)
