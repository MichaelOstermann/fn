import { dfdlT } from "../dfdlT"

/**
 * # randomOrElse
 *
 * ```ts
 * function Arr.randomOrElse<T, U>(
 *     target: readonly T[],
 *     orElse: (target: readonly NoInfer<T>[]) => U,
 * ): T | U
 * ```
 *
 * Returns a random element from `array`, or the result of calling `callback` with the array if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.randomOrElse([1, 2, 3, 4], (arr) => arr.length); // 2 (random)
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.randomOrElse((arr) => arr.length),
 * ); // 2 (random)
 * ```
 *
 */
export const randomOrElse: {
    <T, U>(orElse: (target: readonly NoInfer<T>[]) => U): (target: readonly T[]) => T | U
    <T, U>(target: readonly T[], orElse: (target: readonly NoInfer<T>[]) => U): T | U
} = dfdlT(<T, U>(target: readonly T[], orElse: (target: readonly NoInfer<T>[]) => U): T | U => {
    if (target.length === 0) return orElse(target)
    const idx = Math.floor(Math.random() * target.length)
    return target[idx]!
}, 2)
