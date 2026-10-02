import { dfdlT } from "../dfdl/dfdlT"

/**
 * # findIndexOr
 *
 * ```ts
 * function Arr.findIndexOr<T, U>(
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
 * Returns the index of the first element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, returns `or`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findIndexOr([1, 2, 3, 4], (x) => x > 2, -1); // 2
 * Arr.findIndexOr([1, 2, 3, 4], (x) => x > 5, -1); // -1
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findIndexOr((x) => x > 2, -1),
 * ); // 2
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findIndexOr((x) => x > 5, -1),
 * ); // -1
 * ```
 *
 */
export const findIndexOr: {
    <T, U>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, or: U): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, or: U): number | U
} = dfdlT(<T, U>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, or: U): number | U => {
    const idx = target.findIndex(predicate)
    return idx < 0 ? or : idx
}, 3)
