import { cloneArray } from "../cloneArray"
import { dfdlT } from "../dfdlT"
import { resolveOffset } from "./internals/offset"

/**
 * # setAtOrElse
 *
 * ```ts
 * function Arr.setAtOrElse<T, U>(
 *     target: readonly T[],
 *     idx: number,
 *     value: NoInfer<T>,
 *     orElse: (target: readonly NoInfer<T>[]) => U,
 * ): readonly T[] | U
 * ```
 *
 * Sets the value at the specified `idx` in `target` to `value`. If the index is out of bounds, calls `orElse` with the original array.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.setAtOrElse([1, 2, 3], 1, 9, () => []); // [1, 9, 3]
 * Arr.setAtOrElse([1, 2, 3], -1, 9, () => []); // [1, 2, 9]
 * Arr.setAtOrElse([1, 2, 3], 5, 9, (arr) => arr); // [1, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3],
 *     Arr.setAtOrElse(1, 9, () => []),
 * ); // [1, 9, 3]
 *
 * pipe(
 *     [1, 2, 3],
 *     Arr.setAtOrElse(-1, 9, () => []),
 * ); // [1, 2, 9]
 *
 * pipe(
 *     [1, 2, 3],
 *     Arr.setAtOrElse(5, 9, (arr) => arr),
 * ); // [1, 2, 3]
 * ```
 *
 */
export const setAtOrElse: {
    <T, U>(idx: number, value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): (target: T[]) => T[] | U
    <T, U>(idx: number, value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], idx: number, value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): T[] | U
    <T, U>(target: readonly T[], idx: number, value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): readonly T[] | U
} = dfdlT(<T, U>(target: T[], idx: number, value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): T[] | U => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) return orElse(target)
    if (target[offset] === value) return target
    target = cloneArray(target)
    target.splice(offset, 1, value)
    return target
}, 4)
