import type { OrElse } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `removeLastOrElse(target, value, orElse)`
 *
 * Removes the last occurrence of `value` from `target` array. If the value is not found, calls the `orElse` function with the original array and returns its result.
 *
 * ```ts
 * removeLastOrElse([1, 2, 3, 2], 2, () => []); // [1, 2, 3]
 * removeLastOrElse([1, 2, 3], 4, (arr) => arr); // [1, 2, 3]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 2],
 *     removeLastOrElse(2, () => []),
 * ); // [1, 2, 3]
 * pipe(
 *     [1, 2, 3],
 *     removeLastOrElse(4, (arr) => arr),
 * ); // [1, 2, 3]
 * ```
 */
export const removeLastOrElse: {
    <T, U>(value: NoInfer<T>, orElse: OrElse<T, U>): (target: readonly T[]) => T[] | U
    <T, U>(target: readonly T[], value: NoInfer<T>, orElse: OrElse<T, U>): T[] | U
} = dual(3, <T, U>(target: readonly T[], value: NoInfer<T>, orElse: OrElse<T, U>): T[] | U => {
    const idx = target.lastIndexOf(value)
    if (idx < 0) return orElse(target)
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
})
