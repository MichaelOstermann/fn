import { dfdlT } from "../dfdl/dfdlT"

/**
 * # includes
 *
 * ```ts
 * function Arr.includes<T>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 * ): boolean
 * ```
 *
 * Returns `true` if `array` contains `value`, otherwise returns `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.includes([1, 2, 3, 4], 3); // true
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 4], Arr.includes(3)); // true
 * ```
 *
 */
export const includes: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => boolean
    <T>(target: readonly T[], value: NoInfer<T>): boolean
} = dfdlT(<T>(target: readonly T[], value: NoInfer<T>): boolean => {
    return target.includes(value)
}, 2)
