import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"

/**
 * # prepend
 *
 * ```ts
 * function Arr.prepend<T>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 * ): T[]
 * ```
 *
 * Adds `value` to the beginning of `array`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.prepend([2, 3, 4], 1); // [1, 2, 3, 4]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([2, 3, 4], Arr.prepend(1)); // [1, 2, 3, 4]
 * ```
 *
 */
export const prepend: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => T[]
    <T>(target: readonly T[], value: NoInfer<T>): T[]
} = dfdlT(<T>(target: readonly T[], value: NoInfer<T>): T[] => {
    const clone = cloneArray(target)
    clone.unshift(value)
    return clone
}, 2)
