import type { NonNil } from "../internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `lastOr(array, fallback)`
 *
 * Returns the last element of `array`, or `fallback` if the array is empty.
 *
 * ```ts
 * lastOr([1, 2, 3, 4], 0); // 4
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4], lastOr(0)); // 4
 * ```
 */
export const lastOr: {
    <T, U>(or: U): (target: readonly T[]) => NonNil<T> | U
    <T, U>(target: readonly T[], or: U): NonNil<T> | U
} = dfdlT(<T, U>(target: readonly T[], or: U): any => {
    return target.at(-1) ?? or
}, 2)
