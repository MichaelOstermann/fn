import { dfdlT } from "../dfdlT"

/**
 * # lastOr
 *
 * ```ts
 * function Arr.lastOr<T, U>(
 *     target: readonly T[],
 *     or: U,
 * ): Exclude<T, null | undefined> | U
 * ```
 *
 * Returns the last element of `array`, or `fallback` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.lastOr([1, 2, 3, 4], 0); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 4], Arr.lastOr(0)); // 4
 * ```
 *
 */
export const lastOr: {
    <T, U>(or: U): (target: readonly T[]) => Exclude<T, null | undefined> | U
    <T, U>(target: readonly T[], or: U): Exclude<T, null | undefined> | U
} = dfdlT(<T, U>(target: readonly T[], or: U): any => {
    return target.at(-1) ?? or
}, 2)
