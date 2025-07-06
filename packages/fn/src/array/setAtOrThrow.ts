import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { FnError } from "../function/FnError"
import { is } from "../function/is"
import { resolveOffset } from "./internals/offset"

/**
 * `setAtOrThrow(target, idx, value)`
 *
 * Sets the value at the specified `idx` in `target` to `value`. If the index is out of bounds, throws an error.
 *
 * ```ts
 * setAtOrThrow([1, 2, 3], 1, 9); // [1, 9, 3]
 * setAtOrThrow([1, 2, 3], -1, 9); // [1, 2, 9]
 * setAtOrThrow([1, 2, 3], 5, 9); // throws FnError
 * ```
 *
 * ```ts
 * pipe([1, 2, 3], setAtOrThrow(1, 9)); // [1, 9, 3]
 * pipe([1, 2, 3], setAtOrThrow(-1, 9)); // [1, 2, 9]
 * pipe([1, 2, 3], setAtOrThrow(5, 9)); // throws FnError
 * ```
 */
export const setAtOrThrow: {
    <T>(idx: number, value: NoInfer<T>): (target: T[]) => T[]
    <T>(idx: number, value: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], idx: number, value: NoInfer<T>): T[]
    <T>(target: readonly T[], idx: number, value: NoInfer<T>): readonly T[]
} = dfdlT(<T>(target: T[], idx: number, value: NoInfer<T>): T[] => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) throw new FnError("Array.setAtOrThrow: Index is out of range.", [target, idx, value])
    if (is(target[offset], value)) return target
    target = cloneArray(target)
    target.splice(offset, 1, value)
    return target
}, 3)
