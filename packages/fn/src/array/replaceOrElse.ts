import type { OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `replaceOrElse(target, value, replacement, orElse)`
 *
 * Replaces the first occurrence of `value` in `target` with `replacement`. If `value` is not found, calls `orElse` with the original array.
 *
 * ```ts
 * replaceOrElse([1, 2, 3, 2], 2, 9, () => []); // [1, 9, 3, 2]
 * replaceOrElse([1, 2, 3], 4, 9, (arr) => arr); // [1, 2, 3]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 2],
 *     replaceOrElse(2, 9, () => []),
 * ); // [1, 9, 3, 2]
 * pipe(
 *     [1, 2, 3],
 *     replaceOrElse(4, 9, (arr) => arr),
 * ); // [1, 2, 3]
 * ```
 */
export const replaceOrElse: {
    <T, U>(value: NoInfer<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): (target: T[]) => T[] | U
    <T, U>(value: NoInfer<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): T[] | U
    <T, U>(target: readonly T[], value: NoInfer<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): readonly T[] | U
} = dfdlT(<T, U>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): T[] | U => {
    if (is(value, replacement)) return target
    const idx = target.indexOf(value)
    if (idx === -1) return orElse(target)
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 4)
