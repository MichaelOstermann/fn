import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"

/**
 * # insertAtOr
 *
 * ```ts
 * function Arr.insertAtOr<T, U>(
 *     target: readonly T[],
 *     idx: number,
 *     value: NoInfer<T>,
 *     or: U,
 * ): T[] | U
 * ```
 *
 * Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element, or `fallback` if the index is out of bounds.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.insertAtOr([1, 2, 3], 10, 99, []); // []
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3], Arr.insertAtOr(10, 99, [])); // []
 * ```
 *
 */
export const insertAtOr: {
    <T, U>(idx: number, value: NoInfer<T>, or: U): (target: readonly T[]) => T[] | U
    <T, U>(target: readonly T[], idx: number, value: NoInfer<T>, or: U): T[] | U
} = dfdlT(<T, U>(target: readonly T[], idx: number, value: NoInfer<T>, or: U): T[] | U => {
    if (idx < 0 || idx > target.length) return or
    const clone = cloneArray(target)
    clone.splice(idx, 0, value)
    return clone
}, 4)
