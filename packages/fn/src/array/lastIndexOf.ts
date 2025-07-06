import { dfdlT } from "@monstermann/dfdl"

/**
 * `lastIndexOf(array, value)`
 *
 * Returns the last index at which `value` can be found in `array`, or -1 if it is not present.
 *
 * ```ts
 * lastIndexOf([1, 2, 3, 2, 4], 2); // 3
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 2, 4], lastIndexOf(2)); // 3
 * ```
 */
export const lastIndexOf: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => number
    <T>(target: readonly T[], value: NoInfer<T>): number
} = dfdlT(<T>(target: readonly T[], value: NoInfer<T>): number => {
    return target.lastIndexOf(value)
}, 2)
