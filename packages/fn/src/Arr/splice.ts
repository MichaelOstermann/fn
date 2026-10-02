import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"

/**
 * # splice
 *
 * ```ts
 * function Arr.splice<T>(
 *     target: readonly T[],
 *     start: number,
 *     deleteCount: number,
 *     items?: Iterable<NoInfer<T>>,
 * ): T[]
 * ```
 *
 * Removes `deleteCount` elements from `target` starting at `start` index and optionally inserts new `items` in their place.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.splice([1, 2, 3, 4, 5], 1, 2); // [1, 4, 5]
 * Arr.splice([1, 2, 3, 4, 5], 1, 2, [10, 20]); // [1, 10, 20, 4, 5]
 * Arr.splice([1, 2, 3, 4, 5], -2, 1); // [1, 2, 3, 5]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 4, 5], Arr.splice(1, 2)); // [1, 4, 5]
 * pipe([1, 2, 3, 4, 5], Arr.splice(1, 2, [10, 20])); // [1, 10, 20, 4, 5]
 * pipe([1, 2, 3, 4, 5], Arr.splice(-2, 1)); // [1, 2, 3, 5]
 * ```
 *
 */
export const splice: {
    <T>(start: number, deleteCount: number, items?: Iterable<NoInfer<T>>): (target: readonly T[]) => T[]

    <T>(target: readonly T[], start: number, deleteCount: number, items?: Iterable<NoInfer<T>>): T[]
} = dfdlT(<T>(target: readonly T[], start: number, deleteCount: number, items?: Iterable<NoInfer<T>>): T[] => {
    const clone = cloneArray(target)
    clone.splice(start, deleteCount, ...(items ?? []))
    return clone
}, args => Array.isArray(args[0]))
