import { dfdlT } from "../dfdl/dfdlT"

/**
 * # meanOrElse
 *
 * ```ts
 * function Arr.meanOrElse<T>(
 *     target: readonly number[],
 *     orElse: (target: readonly number[]) => T,
 * ): number | T
 * ```
 *
 * Returns the mean (average) value from `array`, or calls `orElse` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.meanOrElse([1, 2, 3], () => 0); // 2
 * Arr.meanOrElse([], () => 0); // 0
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3],
 *     Arr.meanOrElse(() => 0),
 * ); // 2
 *
 * pipe(
 *     [],
 *     Arr.meanOrElse(() => 0),
 * ); // 0
 * ```
 *
 */
export const meanOrElse: {
    <T>(orElse: (target: readonly number[]) => T): (target: readonly number[]) => number | T
    <T>(target: readonly number[], orElse: (target: readonly number[]) => T): number | T
} = dfdlT(<T>(target: readonly number[], orElse: (target: readonly number[]) => T): number | T => {
    if (target.length === 0) return orElse(target)
    return target.reduce((acc, val) => acc + val, 0) / target.length
}, 2)
