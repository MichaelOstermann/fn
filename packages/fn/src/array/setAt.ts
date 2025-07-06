import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { is } from "../function/is"
import { resolveOffset } from "./internals/offset"

/**
 * `setAt(target, idx, value)`
 *
 * Sets the value at the specified `idx` in `target` to `value`. Returns the original array if the index is out of bounds or the value is already the same.
 *
 * ```ts
 * setAt([1, 2, 3], 1, 9); // [1, 9, 3]
 * setAt([1, 2, 3], -1, 9); // [1, 2, 9]
 * setAt([1, 2, 3], 5, 9); // [1, 2, 3]
 * ```
 *
 * ```ts
 * pipe([1, 2, 3], setAt(1, 9)); // [1, 9, 3]
 * pipe([1, 2, 3], setAt(-1, 9)); // [1, 2, 9]
 * pipe([1, 2, 3], setAt(5, 9)); // [1, 2, 3]
 * ```
 */
export const setAt: {
    <T>(idx: number, value: NoInfer<T>): (target: T[]) => T[]
    <T>(idx: number, value: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], idx: number, value: NoInfer<T>): T[]
    <T>(target: readonly T[], idx: number, value: NoInfer<T>): readonly T[]
} = dfdlT(<T>(target: T[], idx: number, value: NoInfer<T>): T[] => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) return target
    if (is(target[offset], value)) return target
    target = cloneArray(target)
    target.splice(offset, 1, value)
    return target
}, 3)
