import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"
import { resolveOffset } from "./internals/offset"

/**
 * # removeAtOr
 *
 * ```ts
 * function Arr.removeAtOr<T, U>(
 *     target: readonly T[],
 *     idx: number,
 *     or: U,
 * ): T[] | U
 * ```
 *
 * Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, returns the fallback value `or`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.removeAtOr([1, 2, 3], 1, []); // [1, 3]
 * Arr.removeAtOr([1, 2, 3], 5, []); // []
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3], Arr.removeAtOr(1, [])); // [1, 3]
 * pipe([1, 2, 3], Arr.removeAtOr(5, [])); // []
 * ```
 *
 */
export const removeAtOr: {
    <U>(idx: number, or: U): <T>(target: readonly T[]) => T[] | U
    <T, U>(target: readonly T[], idx: number, or: U): T[] | U
} = dfdlT(<T, U>(target: readonly T[], idx: number, or: U): T[] | U => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) return or
    const result = cloneArray(target)
    result.splice(offset, 1)
    return result
}, 3)
