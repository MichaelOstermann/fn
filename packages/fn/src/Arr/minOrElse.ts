import { dfdlT } from "../dfdl/dfdlT"

/**
 * # minOrElse
 *
 * ```ts
 * function Arr.minOrElse<T>(
 *     target: readonly number[],
 *     orElse: (target: readonly NoInfer<number>[]) => T,
 * ): number | T
 * ```
 *
 * Returns the minimum value from `target` array, or calls `orElse` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.minOrElse([5, 2, 8, 1], () => 0); // 1
 * Arr.minOrElse([], () => 0); // 0
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [5, 2, 8, 1],
 *     Arr.minOrElse(() => 0),
 * ); // 1
 *
 * pipe(
 *     [],
 *     Arr.minOrElse(() => 0),
 * ); // 0
 * ```
 *
 */
export const minOrElse: {
    <T>(orElse: (target: readonly NoInfer<number>[]) => T): (target: readonly number[]) => number | T
    <T>(target: readonly number[], orElse: (target: readonly NoInfer<number>[]) => T): number | T
} = dfdlT(<T>(target: readonly number[], orElse: (target: readonly NoInfer<number>[]) => T): number | T => {
    if (target.length === 0) return orElse(target)
    return target.reduce((a, b) => Math.min(a, b), 0)
}, 2)
