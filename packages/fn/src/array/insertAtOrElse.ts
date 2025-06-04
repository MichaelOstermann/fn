import type { OrElse } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `insertAtOrElse(array, index, value, callback)`
 *
 * Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element, or the result of calling `callback` with the array if the index is out of bounds.
 *
 * ```ts
 * insertAtOrElse([1, 2, 3], 10, 99, (arr) => arr.length); // 3
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3],
 *     insertAtOrElse(10, 99, (arr) => arr.length),
 * ); // 3
 * ```
 */
export const insertAtOrElse: {
    <T, U>(idx: number, value: NoInfer<T>, orElse: OrElse<T, U>): (target: readonly T[]) => T[] | U
    <T, U>(target: readonly T[], idx: number, value: NoInfer<T>, orElse: OrElse<T, U>): T[] | U
} = dual(4, <T, U>(target: readonly T[], idx: number, value: NoInfer<T>, orElse: OrElse<T, U>): T[] | U => {
    if (idx < 0 || idx > target.length) return orElse(target)
    const clone = cloneArray(target)
    clone.splice(idx, 0, value)
    return clone
})
