import type { OrElse } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `minOrElse(target, orElse)`
 *
 * Returns the minimum value from `target` array, or calls `orElse` if the array is empty.
 *
 * ```ts
 * minOrElse([5, 2, 8, 1], () => 0); // 1
 * minOrElse([], () => 0); // 0
 * ```
 *
 * ```ts
 * pipe(
 *     [5, 2, 8, 1],
 *     minOrElse(() => 0),
 * ); // 1
 * pipe(
 *     [],
 *     minOrElse(() => 0),
 * ); // 0
 * ```
 */
export const minOrElse: {
    <T>(orElse: OrElse<number, T>): (target: readonly number[]) => number | T
    <T>(target: readonly number[], orElse: OrElse<number, T>): number | T
} = dual(2, <T>(target: readonly number[], orElse: OrElse<number, T>): number | T => {
    if (target.length === 0) return orElse(target)
    return target.reduce((a, b) => Math.min(a, b), 0)
})
