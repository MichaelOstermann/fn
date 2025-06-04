import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `sort(target, comparator)`
 *
 * Returns a new array with the elements of `target` sorted using the provided `comparator` function.
 *
 * ```ts
 * sort([3, 1, 4, 2], (a, b) => a - b); // [1, 2, 3, 4]
 * sort(["c", "a", "b"], (a, b) => a.localeCompare(b)); // ['a', 'b', 'c']
 * ```
 *
 * ```ts
 * pipe(
 *     [3, 1, 4, 2],
 *     sort((a, b) => a - b),
 * ); // [1, 2, 3, 4]
 * pipe(
 *     ["c", "a", "b"],
 *     sort((a, b) => a.localeCompare(b)),
 * ); // ['a', 'b', 'c']
 * ```
 */
export const sort: {
    <T>(comparator: (a: NoInfer<T>, b: NoInfer<T>) => number): (target: readonly T[]) => T[]
    <T>(target: readonly T[], comparator: (a: NoInfer<T>, b: NoInfer<T>) => number): T[]
} = dual(2, <T>(target: readonly T[], comparator: (a: NoInfer<T>, b: NoInfer<T>) => number): T[] => {
    return cloneArray(target).sort(comparator)
})
