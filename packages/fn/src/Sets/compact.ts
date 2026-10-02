import type { NonNil } from "./internals/types"
import { dfdlT } from "../dfdl/dfdlT"
import { cloneSet } from "../remmi/cloneSet"

/**
 * # compact
 *
 * ```ts
 * function Sets.compact<T>(
 *     target: ReadonlySet<T>,
 * ): ReadonlySet<NonNil<T>>
 * ```
 *
 * Returns a set with all `null` and `undefined` values removed.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.compact(Sets.create([1, null, 2, undefined])); // Set([1, 2])
 * Sets.compact(Sets.create([1, 2, 3])); // Set([1, 2, 3])
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, null, 2, undefined]), Sets.compact()); // Set([1, 2])
 * pipe(Sets.create([1, 2, 3]), Sets.compact()); // Set([1, 2, 3])
 * ```
 *
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
