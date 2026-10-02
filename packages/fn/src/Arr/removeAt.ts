import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"
import { resolveOffset } from "./internals/offset"

/**
 * # removeAt
 *
 * ```ts
 * function Arr.removeAt<T>(
 *     target: readonly T[],
 *     idx: number,
 * ): readonly T[]
 * ```
 *
 * Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, returns the original array unchanged.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.removeAt([1, 2, 3, 4], 1); // [1, 3, 4]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 4], Arr.removeAt(1)); // [1, 3, 4]
 * ```
 *
 */
export const removeAt: {
    (idx: number): <T>(target: T[]) => T[]
    (idx: number): <T>(target: readonly T[]) => readonly T[]

    <T>(target: T[], idx: number): T[]
    <T>(target: readonly T[], idx: number): readonly T[]
} = dfdlT(<T>(target: T[], idx: number): T[] => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) return target
    target = cloneArray(target)
    target.splice(offset, 1)
    return target
}, 2)
