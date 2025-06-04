import { dual } from "@monstermann/dfdl"

/**
 * `isEmpty(array)`
 *
 * Returns `true` if `array` has no elements, otherwise returns `false`.
 *
 * ```ts
 * isEmpty([]); // true
 * ```
 *
 * ```ts
 * pipe([], isEmpty()); // true
 * ```
 */
export const isEmpty: {
    (): <T>(target: readonly T[]) => boolean
    <T>(target: readonly T[]): boolean
} = dual(1, <T>(target: readonly T[]): boolean => {
    return target.length === 0
})
