import { dfdlT } from "../dfdl/dfdlT"

/**
 * # findLastIndexOrThrow
 *
 * ```ts
 * function Arr.findLastIndexOrThrow<T>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 * ): number
 * ```
 *
 * Returns the index of the last element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findLastIndexOrThrow([1, 3, 2, 4], (x) => x > 2); // 3
 * Arr.findLastIndexOrThrow([1, 2, 3, 4], (x) => x > 5); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 3, 2, 4],
 *     Arr.findLastIndexOrThrow((x) => x > 2),
 * ); // 3
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findLastIndexOrThrow((x) => x > 5),
 * ); // throws FnError
 * ```
 *
 */
export const findLastIndexOrThrow: {
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: readonly T[]) => number
    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): number
} = dfdlT(<T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): number => {
    const idx = target.findLastIndex(predicate)
    if (idx < 0) throw new Error("Array.findLastIndexOrThrow: No value found.")
    return idx
}, 2)
