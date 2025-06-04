import type { IsLiteral } from "../internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { addRange, createRange, hasRange, spliceRange } from "./internals/range"

/**
 * `removeAll(target, values)`
 *
 * Removes all occurrences of each value in `values` from `target` array. If no values are found, returns the original array unchanged. Supports iterables for the values parameter.
 *
 * ```ts
 * removeAll([1, 2, 3, 2, 4], [2, 4]); // [1, 3]
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 2, 4], removeAll([2, 4])); // [1, 3]
 * ```
 */
export const removeAll: {
    <T, const U extends T>(values: Iterable<U>): (target: T[]) => IsLiteral<U> extends true ? Exclude<T, U>[] : T[]
    <T, const U extends T>(values: Iterable<U>): (target: readonly T[]) => IsLiteral<U> extends true ? readonly Exclude<T, U>[] : readonly T[]

    <T, const U extends T>(target: T[], values: Iterable<U>): IsLiteral<U> extends true ? Exclude<T, U>[] : T[]
    <T, const U extends T>(target: readonly T[], values: Iterable<U>): IsLiteral<U> extends true ? readonly Exclude<T, U>[] : readonly T[]
} = dual(2, (target: any, values: any): any => {
    const range = createRange()

    for (const value of values) {
        let idx = target.indexOf(value)
        while (idx !== -1) {
            addRange(range, idx)
            idx = target.indexOf(value, idx + 1)
        }
    }

    if (hasRange(range)) {
        target = cloneArray(target)
        spliceRange(target, range)
    }

    return target
})
