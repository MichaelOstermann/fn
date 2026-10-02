import { cloneArray } from "../cloneArray"
import { dfdlT } from "../dfdlT"

/**
 * # findReplaceOrThrow
 *
 * ```ts
 * function Arr.findReplaceOrThrow<T>(
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
 * Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or throws an error if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findReplaceOrThrow([1, 2, 3, 4], (x) => x > 2, 99); // [1, 2, 99, 4]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findReplaceOrThrow((x) => x > 2, 99),
 * ); // [1, 2, 99, 4]
 * ```
 *
 */
export const findReplaceOrThrow: {
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, replacement: NoInfer<T>): (target: T[]) => T[]
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, replacement: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, replacement: NoInfer<T>): T[]
    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, replacement: NoInfer<T>): readonly T[]
} = dfdlT(<T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, replacement: NoInfer<T>): T[] => {
    const idx = target.findIndex(predicate)
    if (idx === -1) throw new Error("Array.findReplaceOrThrow: Value not found.")
    const prev = target[idx]! as T
    if (prev === replacement) return target
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 3)
