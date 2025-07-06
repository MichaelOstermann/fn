import type { OrElse } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `randomOrElse(array, callback)`
 *
 * Returns a random element from `array`, or the result of calling `callback` with the array if the array is empty.
 *
 * ```ts
 * randomOrElse([1, 2, 3, 4], (arr) => arr.length); // 2 (random)
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     randomOrElse((arr) => arr.length),
 * ); // 2 (random)
 * ```
 */
export const randomOrElse: {
    <T, U>(orElse: OrElse<T, U>): (target: readonly T[]) => T | U
    <T, U>(target: readonly T[], orElse: OrElse<T, U>): T | U
} = dual(2, <T, U>(target: readonly T[], orElse: OrElse<T, U>): T | U => {
    if (target.length === 0) return orElse(target)
    const idx = Math.floor(Math.random() * target.length)
    return target[idx]!
})
