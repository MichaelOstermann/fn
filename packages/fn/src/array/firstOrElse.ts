import type { NonNil } from "../internals/types"
import type { OrElse } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `firstOrElse(array, callback)`
 *
 * Returns the first element of `array`, or the result of calling `callback` with the array if the array is empty.
 *
 * ```ts
 * firstOrElse([1, 2, 3, 4], (arr) => arr.length); // 1
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     firstOrElse((arr) => arr.length),
 * ); // 1
 * ```
 */
export const firstOrElse: {
    <T, U>(orElse: OrElse<T, U>): (target: readonly T[]) => NonNil<T> | U
    <T, U>(target: readonly T[], orElse: OrElse<T, U>): NonNil<T> | U
} = dual(2, <T, U>(target: readonly T[], orElse: OrElse<T, U>): any => {
    return target[0] ?? orElse(target)
})
