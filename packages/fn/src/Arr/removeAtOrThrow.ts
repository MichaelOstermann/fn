import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"
import { resolveOffset } from "./internals/offset"

/**
 * # removeAtOrThrow
 *
 * ```ts
 * function Arr.removeAtOrThrow<T>(
 *     target: readonly T[],
 *     idx: number,
 * ): T[]
 * ```
 *
 * Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.removeAtOrThrow([1, 2, 3], 1); // [1, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3], Arr.removeAtOrThrow(1)); // [1, 3]
 * ```
 *
 */
export const removeAtOrThrow: {
    <T>(idx: number): (target: readonly T[]) => T[]
    <T>(target: readonly T[], idx: number): T[]
} = dfdlT(<T>(target: readonly T[], idx: number): T[] => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) throw new Error("removeAtOrThrow: Index is out of range.")
    const result = cloneArray(target)
    result.splice(offset, 1)
    return result
}, 2)
