import type { NonNil } from "../internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * `compact(target)`
 *
 * Removes all nullable values (`null` and `undefined`) from the `target` set and returns a new set.
 *
 * ```ts
 * compact(new Set([1, null, 2, undefined])); // Set([1, 2])
 * compact(new Set([1, 2, 3])); // Set([1, 2, 3])
 * ```
 *
 * ```ts
 * pipe(new Set([1, null, 2, undefined]), compact()); // Set([1, 2])
 * pipe(new Set([1, 2, 3]), compact()); // Set([1, 2, 3])
 * ```
 */
export const compact: {
    <T>(): (target: Set<T>) => Set<NonNil<T>>
    <T>(): (target: ReadonlySet<T>) => ReadonlySet<NonNil<T>>

    <T>(target: Set<T>): Set<NonNil<T>>
    <T>(target: ReadonlySet<T>): ReadonlySet<NonNil<T>>
} = dfdlT((target: any): any => {
    if (!target.has(null) && !target.has(undefined)) return target
    target = cloneSet(target)
    target.delete(null)
    target.delete(undefined)
    return target
}, 1)
