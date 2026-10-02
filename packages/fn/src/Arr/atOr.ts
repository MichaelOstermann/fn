import { dfdlT } from "../dfdlT"

/**
 * # atOr
 *
 * ```ts
 * function Arr.atOr<T, U>(
 *     target: readonly T[],
 *     offset: number,
 *     or: U,
 * ): Exclude<T, null | undefined> | U
 * ```
 *
 * Returns the value at the specified `offset`. Returns `fallback` if the `offset` was out of range, or the retrieved value was nullable.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.atOr([1, null], -1, 2); // 2
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, null], Arr.atOr(-1, 2)); // 2
 * ```
 *
 */
export const atOr: {
    <U>(offset: number, or: U): <T>(target: readonly T[]) => Exclude<T, null | undefined> | U
    <T, U>(target: readonly T[], offset: number, or: U): Exclude<T, null | undefined> | U
} = dfdlT(<T, U>(target: readonly T[], offset: number, or: U): Exclude<T, null | undefined> | U => {
    return target.at(offset) as Exclude<T, null | undefined> ?? or
}, 3)
