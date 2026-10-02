import { cloneArray } from "../cloneArray"
import { dfdlT } from "../dfdlT"

/**
 * # findRemove
 *
 * ```ts
 * function Arr.findRemove<T>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 * ): readonly T[]
 * ```
 *
 * Finds the first element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findRemove([1, 2, 3, 4], (x) => x > 2); // [1, 2, 4]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findRemove((x) => x > 2),
 * ); // [1, 2, 4]
 * ```
 *
 */
export const findRemove: {
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: T[]) => T[]
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: readonly T[]) => readonly T[]

    <T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): T[]
    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): readonly T[]
} = dfdlT(<T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): T[] => {
    const idx = target.findIndex(predicate)
    if (idx === -1) return target
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 2)
