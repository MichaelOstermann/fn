import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"

/**
 * # sort
 *
 * ```ts
 * function Arr.sort<T>(
 *     target: readonly T[],
 *     comparator: (a: NoInfer<T>, b: NoInfer<T>) => number,
 * ): T[]
 * ```
 *
 * Returns a new array with the elements of `target` sorted using the provided `comparator` function.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.sort([3, 1, 4, 2], (a, b) => a - b); // [1, 2, 3, 4]
 * Arr.sort(["c", "a", "b"], (a, b) => a.localeCompare(b)); // ['a', 'b', 'c']
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [3, 1, 4, 2],
 *     Arr.sort((a, b) => a - b),
 * ); // [1, 2, 3, 4]
 *
 * pipe(
 *     ["c", "a", "b"],
 *     Arr.sort((a, b) => a.localeCompare(b)),
 * ); // ['a', 'b', 'c']
 * ```
 *
 */
export const sort: {
    <T>(comparator: (a: NoInfer<T>, b: NoInfer<T>) => number): (target: readonly T[]) => T[]
    <T>(target: readonly T[], comparator: (a: NoInfer<T>, b: NoInfer<T>) => number): T[]
} = dfdlT(<T>(target: readonly T[], comparator: (a: NoInfer<T>, b: NoInfer<T>) => number): T[] => {
    return cloneArray(target).sort(comparator)
}, 2)
