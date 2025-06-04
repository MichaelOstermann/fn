import type { NonNil } from "../internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `firstOr(array, fallback)`
 *
 * Returns the first element of `array`, or `fallback` if the array is empty.
 *
 * ```ts
 * firstOr([1, 2, 3, 4], 0); // 1
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4], firstOr(0)); // 1
 * ```
 */
export const firstOr: {
    <T, U>(or: U): (target: readonly T[]) => NonNil<T> | U
    <T, U>(target: readonly T[], or: U): NonNil<T> | U
} = dual(2, <T, U>(target: readonly T[], or: U): any => {
    return target[0] ?? or
})
