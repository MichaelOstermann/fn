import type { OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { insertAllAt } from "./insertAllAt"

/**
 * `insertAllAtOrElse(target, idx, values, orElse)`
 *
 * Inserts all `values` at the specified `idx` in `target`. If the index is out of bounds, calls `orElse` with the original array. Supports iterables.
 *
 * ```ts
 * insertAllAtOrElse([1, 2, 3], 1, [8, 9], () => []); // [1, 8, 9, 2, 3]
 * insertAllAtOrElse([1, 2, 3], 5, [8, 9], (arr) => arr); // [1, 2, 3]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3],
 *     insertAllAtOrElse(1, [8, 9], () => []),
 * ); // [1, 8, 9, 2, 3]
 * pipe(
 *     [1, 2, 3],
 *     insertAllAtOrElse(5, [8, 9], (arr) => arr),
 * ); // [1, 2, 3]
 * ```
 */
export const insertAllAtOrElse: {
    <T, U>(idx: number, values: Iterable<NoInfer<T>>, orElse: OrElse<T, U>): (target: T[]) => T[] | U
    <T, U>(idx: number, values: Iterable<NoInfer<T>>, orElse: OrElse<T, U>): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], idx: number, values: Iterable<NoInfer<T>>, orElse: OrElse<T, U>): T[] | U
    <T, U>(target: readonly T[], idx: number, values: Iterable<NoInfer<T>>, orElse: OrElse<T, U>): readonly T[] | U
} = dfdlT(<T, U>(target: T[], idx: number, values: Iterable<NoInfer<T>>, orElse: OrElse<T, U>): T[] | U => {
    if (idx < 0 || idx > target.length) return orElse(target)
    return insertAllAt(target, idx, values)
}, 4)
