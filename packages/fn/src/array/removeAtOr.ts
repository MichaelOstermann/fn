import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { resolveOffset } from "./internals/offset"

/**
 * `removeAtOr(target, idx, or)`
 *
 * Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, returns the fallback value `or`.
 *
 * ```ts
 * removeAtOr([1, 2, 3], 1, []); // [1, 3]
 * removeAtOr([1, 2, 3], 5, []); // []
 * ```
 *
 * ```ts
 * pipe([1, 2, 3], removeAtOr(1, [])); // [1, 3]
 * pipe([1, 2, 3], removeAtOr(5, [])); // []
 * ```
 */
export const removeAtOr: {
    <U>(idx: number, or: U): <T>(target: readonly T[]) => T[] | U
    <T, U>(target: readonly T[], idx: number, or: U): T[] | U
} = dual(3, <T, U>(target: readonly T[], idx: number, or: U): T[] | U => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) return or
    const result = cloneArray(target)
    result.splice(offset, 1)
    return result
})
