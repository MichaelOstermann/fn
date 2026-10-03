import type { IsLiteral } from "./internals/types"
import { cloneArray } from "../cloneArray"
import { dfdlT } from "../dfdlT"
import { addRange, createRange, hasRange, spliceRange } from "./internals/range"

/**
 * # removeAll
 *
 * ```ts
 * function Arr.removeAll<T, const U extends T>(
 *     target: readonly T[],
 *     values: Iterable<U>,
 * ): IsLiteral<U> extends true
 *     ? readonly Exclude<T, U>[]
 *     : readonly T[]
 * ```
 *
 * Removes all occurrences of each value in `values` from `target` array. If no values are found, returns the original array unchanged.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.removeAll([1, 2, 3, 2, 4], [2, 4]); // [1, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 2, 4], Arr.removeAll([2, 4])); // [1, 3]
 * ```
 *
 */
export const removeAll: {
    <T, const U extends T>(values: Iterable<U>): (target: T[]) => IsLiteral<U> extends true ? Exclude<T, U>[] : T[]
    <T, const U extends T>(values: Iterable<U>): (target: readonly T[]) => IsLiteral<U> extends true ? readonly Exclude<T, U>[] : readonly T[]

    <T, const U extends T>(target: T[], values: Iterable<U>): IsLiteral<U> extends true ? Exclude<T, U>[] : T[]
    <T, const U extends T>(target: readonly T[], values: Iterable<U>): IsLiteral<U> extends true ? readonly Exclude<T, U>[] : readonly T[]
} = dfdlT((target: any, values: any): any => {
    const removals = new Set(values)
    if (!removals.size) return target

    // Like indexOf: NaN is never found, and holes are not undefined.
    removals.delete(Number.NaN)
    const hasUndefined = removals.has(undefined)

    const range = createRange()
    for (let i = 0; i < target.length; i++) {
        const value = target[i]
        if (!removals.has(value)) continue
        if (value === undefined && hasUndefined && !(i in target)) continue
        addRange(range, i)
    }

    if (hasRange(range)) {
        target = cloneArray(target)
        spliceRange(target, range)
    }

    return target
}, 2)
