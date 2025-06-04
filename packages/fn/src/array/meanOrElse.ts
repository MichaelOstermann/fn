import type { OrElse } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `meanOrElse(array, orElse)`
 *
 * Returns the mean (average) value from `array`, or calls `orElse` if the array is empty.
 *
 * ```ts
 * meanOrElse([1, 2, 3], () => 0); // 2
 * meanOrElse([], () => 0); // 0
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3],
 *     meanOrElse(() => 0),
 * ); // 2
 * pipe(
 *     [],
 *     meanOrElse(() => 0),
 * ); // 0
 * ```
 */
export const meanOrElse: {
    <T>(orElse: OrElse<number, T>): (target: readonly number[]) => number | T
    <T>(target: readonly number[], orElse: OrElse<number, T>): number | T
} = dual(2, <T>(target: readonly number[], orElse: OrElse<number, T>): number | T => {
    if (target.length === 0) return orElse(target)
    return target.reduce((acc, val) => acc + val, 0) / target.length
})
