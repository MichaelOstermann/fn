import { cloneArray } from "../cloneArray"
import { dfdlT } from "../dfdlT"

/**
 * # findRemoveLastOrThrow
 *
 * ```ts
 * function Arr.findRemoveLastOrThrow<T>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 * ): T[]
 * ```
 *
 * Finds the last element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or throws an error if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findRemoveLastOrThrow([1, 2, 3, 4], (x) => x > 2); // [1, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findRemoveLastOrThrow((x) => x > 2),
 * ); // [1, 2, 3]
 * ```
 *
 */
export const findRemoveLastOrThrow: {
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: readonly T[]) => T[]
    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): T[]
} = dfdlT(<T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): T[] => {
    const idx = target.findLastIndex(predicate)
    if (idx === -1) throw new Error("Array.findRemoveLastOrThrow: Value not found.")
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 2)
