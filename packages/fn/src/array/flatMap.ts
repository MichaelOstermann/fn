import type { ArrayMap } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { markAsMutable } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `flatMap(array, mapper)`
 *
 * Maps each element in `array` using the `mapper` function and flattens the result by one level.
 *
 * ```ts
 * flatMap([1, 2, 3], (x) => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3],
 *     flatMap((x) => [x, x * 2]),
 * ); // [1, 2, 2, 4, 3, 6]
 * ```
 */
export const flatMap: {
    <T, U>(mapper: ArrayMap<T, U[]>): (target: T[]) => U[]
    <T, U>(mapper: ArrayMap<T, U[]>): (target: readonly T[]) => readonly U[]

    <T, U>(target: T[], mapper: ArrayMap<T, U[]>): U[]
    <T, U>(target: readonly T[], mapper: ArrayMap<T, U[]>): readonly U[]
} = dual(2, <T, U>(target: T[], mapper: ArrayMap<T, U[]>): U[] => {
    let hasChanges = false
    const result = target.flatMap((a, b, c) => {
        const output = mapper(a, b, c)
        hasChanges ||= !(target.length === 1 && is(target[0], a))
        return output
    })
    return hasChanges
        ? markAsMutable(result)
        : target as any
})
