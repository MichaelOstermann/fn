import { dfdlT } from "../dfdl/dfdlT"

/**
 * # findIndexOrThrow
 *
 * ```ts
 * function Arr.findIndexOrThrow<T>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 * ): number
 * ```
 *
 * Returns the index of the first element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findIndexOrThrow([1, 2, 3, 4], (x) => x > 2); // 2
 * Arr.findIndexOrThrow([1, 2, 3, 4], (x) => x > 5); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findIndexOrThrow((x) => x > 2),
 * ); // 2
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findIndexOrThrow((x) => x > 5),
 * ); // throws FnError
 * ```
 *
 */
export const findIndexOrThrow: {
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: readonly T[]) => number
    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): number
} = dfdlT(<T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): number => {
    const idx = target.findIndex(predicate)
    if (idx < 0) throw new Error("Array.findIndexOrThrow: No value found.")
    return idx
}, 2)
