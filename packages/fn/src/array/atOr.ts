import type { NonNil } from "../internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `atOr(array, offset, fallback)`
 *
 * Returns the value at the specified `offset`. Returns `fallback` if the `offset` was out of range, or the retrieved value was nullable.
 *
 * ```ts
 * atOr([1, null], -1, 2); // 2
 * ```
 *
 * ```ts
 * pipe([1, null], atOr(-1, 2)); // 2
 * ```
 */
export const atOr: {
    <U>(offset: number, or: U): <T>(target: readonly T[]) => NonNil<T> | U
    <T, U>(target: readonly T[], offset: number, or: U): NonNil<T> | U
} = dual(3, <T, U>(target: readonly T[], offset: number, or: U): NonNil<T> | U => {
    return target.at(offset) as NonNil<T> ?? or
})
