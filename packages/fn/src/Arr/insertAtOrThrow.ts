import { cloneArray } from "../cloneArray"
import { dfdlT } from "../dfdlT"

/**
 * # insertAtOrThrow
 *
 * ```ts
 * function Arr.insertAtOrThrow<T>(
 *     target: readonly T[],
 *     idx: number,
 *     value: NoInfer<T>,
 * ): T[]
 * ```
 *
 * Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element, or throws an error if the index is out of bounds.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.insertAtOrThrow([1, 2, 3], 1, 10); // [1, 10, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3], Arr.insertAtOrThrow(1, 10)); // [1, 10, 2, 3]
 * ```
 *
 */
export const insertAtOrThrow: {
    <T>(idx: number, value: NoInfer<T>): (target: readonly T[]) => T[]
    <T>(target: readonly T[], idx: number, value: NoInfer<T>): T[]
} = dfdlT(<T>(target: readonly T[], idx: number, value: NoInfer<T>): T[] => {
    if (idx < 0 || idx > target.length) throw new Error("Array.insertAtOrThrow: Index is out of range")
    const clone = cloneArray(target)
    clone.splice(idx, 0, value)
    return clone
}, 3)
