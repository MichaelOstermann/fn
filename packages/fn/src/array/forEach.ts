import type { ArrayMap } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `forEach(array, callback)`
 *
 * Executes the provided `callback` function once for each element in `array` and returns the original array.
 *
 * ```ts
 * forEach([1, 2, 3], (x) => console.log(x)); // [1, 2, 3]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3],
 *     forEach((x) => console.log(x)),
 * ); // [1, 2, 3]
 * ```
 */
export const forEach: {
    <T>(callback: ArrayMap<T, any>): (target: T[]) => T[]
    <T>(callback: ArrayMap<T, any>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], callback: ArrayMap<T, any>): T[]
    <T>(target: readonly T[], callback: ArrayMap<T, any>): readonly T[]
} = dual(2, <T>(target: T[], callback: ArrayMap<T, any>): T[] => {
    target.forEach(callback)
    return target
})
