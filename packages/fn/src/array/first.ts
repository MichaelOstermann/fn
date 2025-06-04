import { dual } from "@monstermann/dfdl"

/**
 * `first(array)`
 *
 * Returns the first element of `array`, or `undefined` if the array is empty.
 *
 * ```ts
 * first([1, 2, 3, 4]); // 1
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4], first()); // 1
 * ```
 */
export const first: {
    (): <T>(target: readonly T[]) => T | undefined
    <T>(target: readonly T[]): T | undefined
} = dual(1, <T>(target: readonly T[]): T | undefined => {
    return target[0]
})
