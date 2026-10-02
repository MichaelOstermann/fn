import { dfdlT } from "../dfdlT"

/**
 * # join
 *
 * ```ts
 * function Arr.join<T>(
 *     target: readonly T[],
 *     separator: string,
 * ): string
 * ```
 *
 * Joins all elements of `array` into a string, separated by the specified `separator`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.join([1, 2, 3], ", "); // "1, 2, 3"
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3], Arr.join(", ")); // "1, 2, 3"
 * ```
 *
 */
export const join: {
    <T>(separator: string): (target: readonly T[]) => string
    <T>(target: readonly T[], separator: string): string
} = dfdlT(<T>(target: readonly T[], separator: string): string => {
    return target.join(separator)
}, 2)
