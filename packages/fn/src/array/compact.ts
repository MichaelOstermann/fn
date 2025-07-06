import type { NonNil } from "../internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { filter } from "./filter"

/**
 * `compact(array)`
 *
 * Removes all nullable values from `array`.
 *
 * ```ts
 * compact([1, null, undefined]); // [1]
 * ```
 *
 * ```ts
 * pipe([1, null, undefined], compact()); // [1]
 * ```
 */
export const compact: {
    (): <T>(target: T[]) => NonNil<T>[]
    (): <T>(target: readonly T[]) => readonly NonNil<T>[]

    <T>(target: T[]): NonNil<T>[]
    <T>(target: readonly T[]): readonly NonNil<T>[]
} = dfdlT(<T>(target: T[]): any => {
    return filter(target, v => v != null)
}, 1)
