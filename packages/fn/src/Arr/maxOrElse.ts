import { dfdlT } from "../dfdlT"

/**
 * # maxOrElse
 *
 * ```ts
 * function Arr.maxOrElse<T>(
 *     target: readonly number[],
 *     orElse: (target: readonly number[]) => T,
 * ): number | T
 * ```
 *
 * Returns the maximum value from `array`, or calls `orElse` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.maxOrElse([1, 5, 3], () => 0); // 5
 * Arr.maxOrElse([], () => 0); // 0
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 5, 3],
 *     Arr.maxOrElse(() => 0),
 * ); // 5
 *
 * pipe(
 *     [],
 *     Arr.maxOrElse(() => 0),
 * ); // 0
 * ```
 *
 */
export const maxOrElse: {
    <T>(orElse: (target: readonly number[]) => T): (target: readonly number[]) => number | T
    <T>(target: readonly number[], orElse: (target: readonly number[]) => T): number | T
} = dfdlT(<T>(target: readonly number[], orElse: (target: readonly number[]) => T): number | T => {
    if (target.length === 0) return orElse(target)
    return target.reduce((a, b) => Math.max(a, b), 0)
}, 2)
