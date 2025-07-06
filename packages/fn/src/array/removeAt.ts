import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { resolveOffset } from "./internals/offset"

/**
 * `removeAt(target, idx)`
 *
 * Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, returns the original array unchanged.
 *
 * ```ts
 * removeAt([1, 2, 3, 4], 1); // [1, 3, 4]
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4], removeAt(1)); // [1, 3, 4]
 * ```
 */
export const removeAt: {
    (idx: number): <T>(target: T[]) => T[]
    (idx: number): <T>(target: readonly T[]) => readonly T[]

    <T>(target: T[], idx: number): T[]
    <T>(target: readonly T[], idx: number): readonly T[]
} = dfdlT(<T>(target: T[], idx: number): T[] => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) return target
    target = cloneArray(target)
    target.splice(offset, 1)
    return target
}, 2)
