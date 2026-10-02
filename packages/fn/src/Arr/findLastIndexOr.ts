import { dfdlT } from "../dfdl/dfdlT"

/**
 * # findLastIndexOr
 *
 * ```ts
 * function Arr.findLastIndexOr<T, U>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 *     or: U,
 * ): number | U
 * ```
 *
 * Returns the index of the last element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, returns `or`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findLastIndexOr([1, 3, 2, 4], (x) => x > 2, -1); // 3
 * Arr.findLastIndexOr([1, 2, 3, 4], (x) => x > 5, -1); // -1
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 3, 2, 4],
 *     Arr.findLastIndexOr((x) => x > 2, -1),
 * ); // 3
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findLastIndexOr((x) => x > 5, -1),
 * ); // -1
 * ```
 *
 */
export const findLastIndexOr: {
    <T, U>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, or: U): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, or: U): number | U
} = dfdlT(<T, U>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, or: U): number | U => {
    const idx = target.findLastIndex(predicate)
    return idx < 0 ? or : idx
}, 3)
