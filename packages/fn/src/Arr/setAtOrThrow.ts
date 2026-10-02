import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"
import { resolveOffset } from "./internals/offset"

/**
 * # setAtOrThrow
 *
 * ```ts
 * function Arr.setAtOrThrow<T>(
 *     target: readonly T[],
 *     idx: number,
 *     value: NoInfer<T>,
 * ): readonly T[]
 * ```
 *
 * Sets the value at the specified `idx` in `target` to `value`. If the index is out of bounds, throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.setAtOrThrow([1, 2, 3], 1, 9); // [1, 9, 3]
 * Arr.setAtOrThrow([1, 2, 3], -1, 9); // [1, 2, 9]
 * Arr.setAtOrThrow([1, 2, 3], 5, 9); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3], Arr.setAtOrThrow(1, 9)); // [1, 9, 3]
 * pipe([1, 2, 3], Arr.setAtOrThrow(-1, 9)); // [1, 2, 9]
 * pipe([1, 2, 3], Arr.setAtOrThrow(5, 9)); // throws FnError
 * ```
 *
 */
export const setAtOrThrow: {
    <T>(idx: number, value: NoInfer<T>): (target: T[]) => T[]
    <T>(idx: number, value: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], idx: number, value: NoInfer<T>): T[]
    <T>(target: readonly T[], idx: number, value: NoInfer<T>): readonly T[]
} = dfdlT(<T>(target: T[], idx: number, value: NoInfer<T>): T[] => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) throw new Error("Array.setAtOrThrow: Index is out of range.")
    if (target[offset] === value) return target
    target = cloneArray(target)
    target.splice(offset, 1, value)
    return target
}, 3)
