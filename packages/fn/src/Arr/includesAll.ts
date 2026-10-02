import { dfdlT } from "../dfdlT"

/**
 * # includesAll
 *
 * ```ts
 * function Arr.includesAll<T>(
 *     target: readonly T[],
 *     values: Iterable<NoInfer<T>>,
 * ): boolean
 * ```
 *
 * Returns `true` if `array` contains all `values`, otherwise returns `false`. Supports iterables for the `values` parameter.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.includesAll([1, 2, 3, 4], [2, 3]); // true
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 4], Arr.includesAll([2, 3])); // true
 * ```
 *
 */
export const includesAll: {
    <T>(values: Iterable<NoInfer<T>>): (target: readonly T[]) => boolean
    <T>(target: readonly T[], values: Iterable<NoInfer<T>>): boolean
} = dfdlT(<T>(target: readonly T[], values: Iterable<NoInfer<T>>): boolean => {
    for (const value of values) {
        if (!target.includes(value)) return false
    }
    return true
}, 2)
