import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"
import { resolveOffset } from "./internals/offset"

/**
 * # setAtOr
 *
 * ```ts
 * function Arr.setAtOr<T, U>(
 *     target: readonly T[],
 *     idx: number,
 *     value: NoInfer<T>,
 *     or: U,
 * ): readonly T[] | U
 * ```
 *
 * Sets the value at the specified `idx` in `target` to `value`. If the index is out of bounds, returns `or`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.setAtOr([1, 2, 3], 1, 9, []); // [1, 9, 3]
 * Arr.setAtOr([1, 2, 3], -1, 9, []); // [1, 2, 9]
 * Arr.setAtOr([1, 2, 3], 5, 9, []); // []
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3], Arr.setAtOr(1, 9, [])); // [1, 9, 3]
 * pipe([1, 2, 3], Arr.setAtOr(-1, 9, [])); // [1, 2, 9]
 * pipe([1, 2, 3], Arr.setAtOr(5, 9, [])); // []
 * ```
 *
 */
export const setAtOr: {
    <T, U>(idx: number, value: NoInfer<T>, or: U): (target: T[]) => T[] | U
    <T, U>(idx: number, value: NoInfer<T>, or: U): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], idx: number, value: NoInfer<T>, or: U): T[] | U
    <T, U>(target: readonly T[], idx: number, value: NoInfer<T>, or: U): readonly T[] | U
} = dfdlT(<T, U>(target: T[], idx: number, value: NoInfer<T>, or: U): T[] | U => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) return or
    if (target[offset] === value) return target
    target = cloneArray(target)
    target.splice(offset, 1, value)
    return target
}, 4)
