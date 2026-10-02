import { dfdlT } from "../dfdlT"

/**
 * # atOrElse
 *
 * ```ts
 * function Arr.atOrElse<T, U>(
 *     target: readonly T[],
 *     offset: number,
 *     orElse: (target: readonly NoInfer<T>[]) => U,
 * ): Exclude<T, null | undefined> | U
 * ```
 *
 * Returns the value at the specified `offset`. Calls `fallback` if the `offset` was out of range, or the retrieved value was nullable.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.atOrElse([1, null], -1, (array) => array.length); // 2
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, null],
 *     Arr.atOrElse(-1, (array) => array.length),
 * ); // 2
 * ```
 *
 */
export const atOrElse: {
    <T, U>(offset: number, orElse: (target: readonly NoInfer<T>[]) => U): (target: readonly T[]) => Exclude<T, null | undefined> | U
    <T, U>(target: readonly T[], offset: number, orElse: (target: readonly NoInfer<T>[]) => U): Exclude<T, null | undefined> | U
} = dfdlT(<T, U>(target: readonly T[], offset: number, orElse: (target: readonly NoInfer<T>[]) => U): Exclude<T, null | undefined> | U => {
    return target.at(offset) as Exclude<T, null | undefined> ?? orElse(target)
}, 3)
