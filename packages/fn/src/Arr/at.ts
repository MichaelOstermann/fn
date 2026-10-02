import { dfdlT } from "../dfdl/dfdlT"

/**
 * # at
 *
 * ```ts
 * function Arr.at<T>(
 *     target: readonly T[],
 *     offset: number,
 * ): T | undefined
 * ```
 *
 * Returns the value at the specified `offset`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.at([1, 2, 3], -1); // 3
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3], Arr.at(-1)); // 3
 * ```
 *
 */
export const at: {
    (offset: number): <T>(target: readonly T[]) => T | undefined
    <T>(target: readonly T[], offset: number): T | undefined
} = dfdlT(<T>(target: readonly T[], offset: number): T | undefined => {
    return target.at(offset)
}, 2)
