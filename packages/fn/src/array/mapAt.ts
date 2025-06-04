import type { ArrayMap } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { is } from "../function/is"
import { resolveOffset } from "./internals/offset"

/**
 * `mapAt(array, index, mapper)`
 *
 * Applies the `mapper` function to the element at the specified `index` in `array`, returning a new array with the mapped element.
 *
 * ```ts
 * mapAt([1, 2, 3, 4], 1, (x) => x * 10); // [1, 20, 3, 4]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     mapAt(1, (x) => x * 10),
 * ); // [1, 20, 3, 4]
 * ```
 */
export const mapAt: {
    <T>(idx: number, map: ArrayMap<T>): (target: T[]) => T[]
    <T>(idx: number, map: ArrayMap<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], idx: number, map: ArrayMap<T>): T[]
    <T>(target: readonly T[], idx: number, map: ArrayMap<T>): readonly T[]
} = dual(3, <T>(target: T[], idx: number, map: ArrayMap<T>): T[] => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) return target
    const prev = target[offset]! as T
    const next = map(prev, offset, target)
    if (is(prev, next)) return target
    target = cloneArray(target)
    target.splice(offset, 1, next)
    return target
})
