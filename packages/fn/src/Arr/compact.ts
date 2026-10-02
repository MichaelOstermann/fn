import { dfdlT } from "../dfdl/dfdlT"
import { filter } from "./filter"

/**
 * # compact
 *
 * ```ts
 * function Arr.compact<T>(
 *     target: readonly T[],
 * ): readonly Exclude<T, null | undefined>[]
 * ```
 *
 * Removes all nullable values from `array`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.compact([1, null, undefined]); // [1]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, null, undefined], Arr.compact()); // [1]
 * ```
 *
 */
export const compact: {
    (): <T>(target: T[]) => Exclude<T, null | undefined>[]
    (): <T>(target: readonly T[]) => readonly Exclude<T, null | undefined>[]

    <T>(target: T[]): Exclude<T, null | undefined>[]
    <T>(target: readonly T[]): readonly Exclude<T, null | undefined>[]
} = dfdlT(<T>(target: T[]): any => {
    return filter(target, v => v != null)
}, 1)
