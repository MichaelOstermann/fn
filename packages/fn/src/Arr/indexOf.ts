import { dfdlT } from "../dfdl/dfdlT"

/**
 * # indexOf
 *
 * ```ts
 * function Arr.indexOf<T>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 * ): number
 * ```
 *
 * Returns the first index at which `value` can be found in `array`, or -1 if it is not present.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.indexOf([1, 2, 3, 2, 4], 2); // 1
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 2, 4], Arr.indexOf(2)); // 1
 * ```
 *
 */
export const indexOf: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => number
    <T>(target: readonly T[], value: NoInfer<T>): number
} = dfdlT(<T>(target: readonly T[], value: NoInfer<T>): number => {
    return target.indexOf(value)
}, 2)
