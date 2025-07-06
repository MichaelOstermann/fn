import type { OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { resolveOffset } from "./internals/offset"

/**
 * `removeAtOrElse(target, idx, orElse)`
 *
 * Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, calls the `orElse` function with the original array and returns its result.
 *
 * ```ts
 * removeAtOrElse([1, 2, 3], 1, () => []); // [1, 3]
 * removeAtOrElse([1, 2, 3], 5, (arr) => arr); // [1, 2, 3]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3],
 *     removeAtOrElse(1, () => []),
 * ); // [1, 3]
 *
 * pipe(
 *     [1, 2, 3],
 *     removeAtOrElse(5, (arr) => arr),
 * ); // [1, 2, 3]
 * ```
 */
export const removeAtOrElse: {
    <T, U>(idx: number, orElse: OrElse<T, U>): (target: readonly T[]) => T[] | U
    <T, U>(target: readonly T[], idx: number, orElse: OrElse<T, U>): T[] | U
} = dfdlT(<T, U>(target: readonly T[], idx: number, orElse: OrElse<T, U>): T[] | U => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) return orElse(target)
    const result = cloneArray(target)
    result.splice(offset, 1)
    return result
}, 3)
