import { dfdlT } from "../dfdlT"

/**
 * # indexOfOrElse
 *
 * ```ts
 * function Arr.indexOfOrElse<T, U>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 *     orElse: (target: readonly NoInfer<T>[]) => U,
 * ): number | U
 * ```
 *
 * Returns the index of the first occurrence of `value` in `target`. If `value` is not found, calls `orElse` with the original array.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.indexOfOrElse([1, 2, 3, 2], 2, () => -1); // 1
 * Arr.indexOfOrElse([1, 2, 3], 4, (arr) => arr.length); // 3
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 2],
 *     Arr.indexOfOrElse(2, () => -1),
 * ); // 1
 *
 * pipe(
 *     [1, 2, 3],
 *     Arr.indexOfOrElse(4, (arr) => arr.length),
 * ); // 3
 * ```
 *
 */
export const indexOfOrElse: {
    <T, U>(value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): number | U
} = dfdlT(<T, U>(target: readonly T[], value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): number | U => {
    const idx = target.indexOf(value)
    return idx < 0 ? orElse(target) : idx
}, 3)
