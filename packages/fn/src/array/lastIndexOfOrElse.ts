import type { OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `lastIndexOfOrElse(target, value, orElse)`
 *
 * Returns the index of the last occurrence of `value` in `target`. If `value` is not found, calls `orElse` with the original array.
 *
 * ```ts
 * lastIndexOfOrElse([1, 2, 3, 2], 2, () => -1); // 3
 * lastIndexOfOrElse([1, 2, 3], 4, (arr) => arr.length); // 3
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 2],
 *     lastIndexOfOrElse(2, () => -1),
 * ); // 3
 * pipe(
 *     [1, 2, 3],
 *     lastIndexOfOrElse(4, (arr) => arr.length),
 * ); // 3
 * ```
 */
export const lastIndexOfOrElse: {
    <T, U>(value: NoInfer<T>, orElse: OrElse<T, U>): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], value: NoInfer<T>, orElse: OrElse<T, U>): number | U
} = dfdlT(<T, U>(target: readonly T[], value: NoInfer<T>, orElse: OrElse<T, U>): number | U => {
    const idx = target.lastIndexOf(value)
    return idx < 0 ? orElse(target) : idx
}, 3)
