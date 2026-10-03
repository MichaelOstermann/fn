import { cloneArray } from "../cloneArray"
import { dfdlT } from "../dfdlT"

/**
 * # union
 *
 * ```ts
 * function Arr.union<T>(
 *     target: readonly T[],
 *     source: Iterable<NoInfer<T>>,
 * ): readonly T[]
 * ```
 *
 * Returns a new array containing all unique elements from both `target` and `source`. Elements from `source` that are not already in `target` are added to the result.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.union([1, 2, 3], [3, 4, 5]); // [1, 2, 3, 4, 5]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3], Arr.union([3, 4, 5])); // [1, 2, 3, 4, 5]
 * ```
 *
 */
export const union: {
    <T>(source: Iterable<NoInfer<T>>): (target: T[]) => T[]
    <T>(source: Iterable<NoInfer<T>>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], source: Iterable<NoInfer<T>>): T[]
    <T>(target: readonly T[], source: Iterable<NoInfer<T>>): readonly T[]
} = dfdlT(<T>(target: T[], source: Iterable<NoInfer<T>>): T[] => {
    let result: T[] | undefined
    let seen: Set<T> | undefined
    let scans = 0

    for (const item of source) {
        // Scanning is faster for a few items, a set for everything beyond that.
        if (!seen && scans++ === 8 && (result ?? target).length > 16) seen = new Set(result ?? target)
        if (seen ? seen.has(item) : (result ?? target).includes(item)) continue
        result ??= cloneArray(target)
        result.push(item)
        seen?.add(item)
    }

    return result ?? target
}, 2)
