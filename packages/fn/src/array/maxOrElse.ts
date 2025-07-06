import type { OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `maxOrElse(array, orElse)`
 *
 * Returns the maximum value from `array`, or calls `orElse` if the array is empty.
 *
 * ```ts
 * maxOrElse([1, 5, 3], () => 0); // 5
 * maxOrElse([], () => 0); // 0
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 5, 3],
 *     maxOrElse(() => 0),
 * ); // 5
 * pipe(
 *     [],
 *     maxOrElse(() => 0),
 * ); // 0
 * ```
 */
export const maxOrElse: {
    <T>(orElse: OrElse<number, T>): (target: readonly number[]) => number | T
    <T>(target: readonly number[], orElse: OrElse<number, T>): number | T
} = dfdlT(<T>(target: readonly number[], orElse: OrElse<number, T>): number | T => {
    if (target.length === 0) return orElse(target)
    return target.reduce((a, b) => Math.max(a, b), 0)
}, 2)
