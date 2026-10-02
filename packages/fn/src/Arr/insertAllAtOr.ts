import { dfdlT } from "../dfdl/dfdlT"
import { insertAllAt } from "./insertAllAt"

/**
 * # insertAllAtOr
 *
 * ```ts
 * function Arr.insertAllAtOr<T, U>(
 *     target: readonly T[],
 *     idx: number,
 *     values: Iterable<NoInfer<T>>,
 *     or: U,
 * ): readonly T[] | U
 * ```
 *
 * Inserts all `values` at the specified `idx` in `target`. If the index is out of bounds, returns `or`. Supports iterables.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.insertAllAtOr([1, 2, 3], 1, [8, 9], []); // [1, 8, 9, 2, 3]
 * Arr.insertAllAtOr([1, 2, 3], 5, [8, 9], []); // []
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3], Arr.insertAllAtOr(1, [8, 9], [])); // [1, 8, 9, 2, 3]
 * pipe([1, 2, 3], Arr.insertAllAtOr(5, [8, 9], [])); // []
 * ```
 *
 */
export const insertAllAtOr: {
    <T, U>(idx: number, values: Iterable<NoInfer<T>>, or: U): (target: T[]) => T[] | U
    <T, U>(idx: number, values: Iterable<NoInfer<T>>, or: U): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], idx: number, values: Iterable<NoInfer<T>>, or: U): T[] | U
    <T, U>(target: readonly T[], idx: number, values: Iterable<NoInfer<T>>, or: U): readonly T[] | U
} = dfdlT(<T, U>(target: T[], idx: number, values: Iterable<NoInfer<T>>, or: U): T[] | U => {
    if (idx < 0 || idx > target.length) return or
    return insertAllAt(target, idx, values)
}, 4)
