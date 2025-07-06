import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { is } from "../function/is"
import { resolveOffset } from "./internals/offset"

/**
 * `setAtOr(target, idx, value, or)`
 *
 * Sets the value at the specified `idx` in `target` to `value`. If the index is out of bounds, returns `or`.
 *
 * ```ts
 * setAtOr([1, 2, 3], 1, 9, []); // [1, 9, 3]
 * setAtOr([1, 2, 3], -1, 9, []); // [1, 2, 9]
 * setAtOr([1, 2, 3], 5, 9, []); // []
 * ```
 *
 * ```ts
 * pipe([1, 2, 3], setAtOr(1, 9, [])); // [1, 9, 3]
 * pipe([1, 2, 3], setAtOr(-1, 9, [])); // [1, 2, 9]
 * pipe([1, 2, 3], setAtOr(5, 9, [])); // []
 * ```
 */
export const setAtOr: {
    <T, U>(idx: number, value: NoInfer<T>, or: U): (target: T[]) => T[] | U
    <T, U>(idx: number, value: NoInfer<T>, or: U): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], idx: number, value: NoInfer<T>, or: U): T[] | U
    <T, U>(target: readonly T[], idx: number, value: NoInfer<T>, or: U): readonly T[] | U
} = dfdlT(<T, U>(target: T[], idx: number, value: NoInfer<T>, or: U): T[] | U => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) return or
    if (is(target[offset], value)) return target
    target = cloneArray(target)
    target.splice(offset, 1, value)
    return target
}, 4)
