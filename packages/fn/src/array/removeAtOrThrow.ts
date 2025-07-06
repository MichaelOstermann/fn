import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { FnError } from "../function/FnError"
import { resolveOffset } from "./internals/offset"

/**
 * `removeAtOrThrow(target, idx)`
 *
 * Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, throws an error.
 *
 * ```ts
 * removeAtOrThrow([1, 2, 3], 1); // [1, 3]
 * ```
 *
 * ```ts
 * pipe([1, 2, 3], removeAtOrThrow(1)); // [1, 3]
 * ```
 *
 */
export const removeAtOrThrow: {
    <T>(idx: number): (target: readonly T[]) => T[]
    <T>(target: readonly T[], idx: number): T[]
} = dfdlT(<T>(target: readonly T[], idx: number): T[] => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) throw new FnError("removeAtOrThrow: Index is out of range.", [target, idx])
    const result = cloneArray(target)
    result.splice(offset, 1)
    return result
}, 2)
