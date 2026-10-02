import { dfdlT } from "../dfdlT"

/**
 * # isEmpty
 *
 * ```ts
 * function Arr.isEmpty<T>(target: readonly T[]): boolean
 * ```
 *
 * Returns `true` if `array` has no elements, otherwise returns `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.isEmpty([]); // true
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([], Arr.isEmpty()); // true
 * ```
 *
 */
export const isEmpty: {
    (): <T>(target: readonly T[]) => boolean
    <T>(target: readonly T[]): boolean
} = dfdlT(<T>(target: readonly T[]): boolean => {
    return target.length === 0
}, 1)
