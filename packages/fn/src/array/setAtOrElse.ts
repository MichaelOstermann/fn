import type { OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { is } from "../function/is"
import { resolveOffset } from "./internals/offset"

/**
 * `setAtOrElse(target, idx, value, orElse)`
 *
 * Sets the value at the specified `idx` in `target` to `value`. If the index is out of bounds, calls `orElse` with the original array.
 *
 * ```ts
 * setAtOrElse([1, 2, 3], 1, 9, () => []); // [1, 9, 3]
 * setAtOrElse([1, 2, 3], -1, 9, () => []); // [1, 2, 9]
 * setAtOrElse([1, 2, 3], 5, 9, (arr) => arr); // [1, 2, 3]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3],
 *     setAtOrElse(1, 9, () => []),
 * ); // [1, 9, 3]
 * pipe(
 *     [1, 2, 3],
 *     setAtOrElse(-1, 9, () => []),
 * ); // [1, 2, 9]
 * pipe(
 *     [1, 2, 3],
 *     setAtOrElse(5, 9, (arr) => arr),
 * ); // [1, 2, 3]
 * ```
 */
export const setAtOrElse: {
    <T, U>(idx: number, value: NoInfer<T>, orElse: OrElse<T, U>): (target: T[]) => T[] | U
    <T, U>(idx: number, value: NoInfer<T>, orElse: OrElse<T, U>): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], idx: number, value: NoInfer<T>, orElse: OrElse<T, U>): T[] | U
    <T, U>(target: readonly T[], idx: number, value: NoInfer<T>, orElse: OrElse<T, U>): readonly T[] | U
} = dfdlT(<T, U>(target: T[], idx: number, value: NoInfer<T>, orElse: OrElse<T, U>): T[] | U => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) return orElse(target)
    if (is(target[offset], value)) return target
    target = cloneArray(target)
    target.splice(offset, 1, value)
    return target
}, 4)
