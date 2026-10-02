import { cloneArray } from "../cloneArray"
import { dfdlT } from "../dfdlT"

/**
 * # findRemoveOrElse
 *
 * ```ts
 * function Arr.findRemoveOrElse<T, U>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 *     orElse: (target: readonly NoInfer<T>[]) => U,
 * ): T[] | U
 * ```
 *
 * Finds the first element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or the result of calling `callback` with the array if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findRemoveOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 10,
 *     (arr) => arr.length,
 * ); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findRemoveOrElse(
 *         (x) => x > 10,
 *         (arr) => arr.length,
 *     ),
 * ); // 4
 * ```
 *
 */
export const findRemoveOrElse: {
    <T, U>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, orElse: (target: readonly NoInfer<T>[]) => U): (target: readonly T[]) => T[] | U
    <T, U>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, orElse: (target: readonly NoInfer<T>[]) => U): T[] | U
} = dfdlT(<T, U>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, orElse: (target: readonly NoInfer<T>[]) => U): T[] | U => {
    const idx = target.findIndex(predicate)
    if (idx === -1) return orElse(target)
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 3)
