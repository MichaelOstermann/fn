import type { NonNil } from "../internals/types"
import type { OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `lastOrElse(array, callback)`
 *
 * Returns the last element of `array`, or the result of calling `callback` with the array if the array is empty.
 *
 * ```ts
 * lastOrElse([1, 2, 3, 4], (arr) => arr.length); // 4
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     lastOrElse((arr) => arr.length),
 * ); // 4
 * ```
 */
export const lastOrElse: {
    <T, U>(orElse: OrElse<T, U>): (target: readonly T[]) => NonNil<T> | U
    <T, U>(target: readonly T[], orElse: OrElse<T, U>): NonNil<T> | U
} = dfdlT(<T, U>(target: readonly T[], orElse: OrElse<T, U>): any => {
    return target.at(-1) ?? orElse(target)
}, 2)
