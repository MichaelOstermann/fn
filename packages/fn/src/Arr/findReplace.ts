import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"

/**
 * # findReplace
 *
 * ```ts
 * function Arr.findReplace<T>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 *     replacement: NoInfer<T>,
 * ): readonly T[]
 * ```
 *
 * Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findReplace([1, 2, 3, 4], (x) => x > 2, 10); // [1, 2, 10, 4]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findReplace((x) => x > 2, 10),
 * ); // [1, 2, 10, 4]
 * ```
 *
 */
export const findReplace: {
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, replacement: NoInfer<T>): (target: T[]) => T[]
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, replacement: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, replacement: NoInfer<T>): T[]
    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, replacement: NoInfer<T>): readonly T[]
} = dfdlT(<T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, replacement: NoInfer<T>): T[] => {
    const idx = target.findIndex(predicate)
    if (idx === -1) return target
    const prev = target[idx]! as T
    if (prev === replacement) return target
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 3)
