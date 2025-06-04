import type { NonNil } from "../internals/types"
import type { OrElse } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `atOrElse(array, offset, fallback)`
 *
 * Returns the value at the specified `offset`. Calls `fallback` if the `offset` was out of range, or the retrieved value was nullable.
 *
 * ```ts
 * atOrElse([1, null], -1, (array) => array.length); // 2
 * ```
 *
 * ```ts
 * pipe(
 *     [1, null],
 *     atOrElse(-1, (array) => array.length),
 * ); // 2
 * ```
 */
export const atOrElse: {
    <T, U>(offset: number, orElse: OrElse<T, U>): (target: readonly T[]) => NonNil<T> | U
    <T, U>(target: readonly T[], offset: number, orElse: OrElse<T, U>): NonNil<T> | U
} = dual(3, <T, U>(target: readonly T[], offset: number, orElse: OrElse<T, U>): NonNil<T> | U => {
    return target.at(offset) as NonNil<T> ?? orElse(target)
})
