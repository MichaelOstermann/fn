import { dfdlT } from "../dfdl/dfdlT"

/**
 * # medianOrElse
 *
 * ```ts
 * function Arr.medianOrElse<T>(
 *     target: readonly number[],
 *     orElse: (target: readonly number[]) => T,
 * ): number | T
 * ```
 *
 * Returns the median value from `array`, or calls `orElse` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.medianOrElse([1, 3, 5], () => 0); // 3
 * Arr.medianOrElse([1, 2, 3, 4], () => 0); // 2.5
 * Arr.medianOrElse([], () => 0); // 0
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 3, 5],
 *     Arr.medianOrElse(() => 0),
 * ); // 3
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.medianOrElse(() => 0),
 * ); // 2.5
 *
 * pipe(
 *     [],
 *     Arr.medianOrElse(() => 0),
 * ); // 0
 * ```
 *
 */
export const medianOrElse: {
    <T>(orElse: (target: readonly number[]) => T): (target: readonly number[]) => number | T
    <T>(target: readonly number[], orElse: (target: readonly number[]) => T): number | T
} = dfdlT(<T>(target: readonly number[], orElse: (target: readonly number[]) => T): number | T => {
    if (target.length === 0) return orElse(target)
    const sorted = target.toSorted((a, b) => a - b)
    const mid = Math.floor(sorted.length / 2)
    if (sorted.length % 2 === 0) return (sorted[mid - 1]! + sorted[mid]!) / 2
    else return sorted[mid]!
}, 2)
