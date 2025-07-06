import { dfdlT } from "@monstermann/dfdl"

/**
 * `join(array, separator)`
 *
 * Joins all elements of `array` into a string, separated by the specified `separator`.
 *
 * ```ts
 * join([1, 2, 3], ", "); // "1, 2, 3"
 * ```
 *
 * ```ts
 * pipe([1, 2, 3], join(", ")); // "1, 2, 3"
 * ```
 */
export const join: {
    <T>(separator: string): (target: readonly T[]) => string
    <T>(target: readonly T[], separator: string): string
} = dfdlT(<T>(target: readonly T[], separator: string): string => {
    return target.join(separator)
}, 2)
