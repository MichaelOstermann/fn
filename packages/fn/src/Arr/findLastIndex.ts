import { dfdlT } from "../dfdlT"

/**
 * # findLastIndex
 *
 * ```ts
 * function Arr.findLastIndex<T>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 * ): number
 * ```
 *
 * Returns the index of the last element in `array` that satisfies the provided `predicate` function, or -1 if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findLastIndex([1, 2, 3, 4], (x) => x > 2); // 3
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findLastIndex((x) => x > 2),
 * ); // 3
 * ```
 *
 */
export const findLastIndex: {
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: readonly T[]) => number
    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): number
} = dfdlT(<T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): number => {
    return target.findLastIndex(predicate)
}, 2)
