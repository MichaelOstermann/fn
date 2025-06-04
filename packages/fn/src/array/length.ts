import { dual } from "@monstermann/dfdl"

/**
 * `length(array)`
 *
 * Returns the number of elements in `array`.
 *
 * ```ts
 * length([1, 2, 3, 4]); // 4
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4], length()); // 4
 * ```
 */
export const length: {
    (): <T>(target: readonly T[]) => number
    <T>(target: readonly T[]): number
} = dual(1, <T>(target: readonly T[]): number => {
    return target.length
})
