import type { ArrayMap } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { FnError } from "../function/FnError"
import { is } from "../function/is"
import { resolveOffset } from "./internals/offset"

/**
 * `mapAtOrThrow(array, index, mapper)`
 *
 * Applies the `mapper` function to the element at the specified `index` in `array`, returning a new array with the mapped element, or throws an error if the index is out of bounds.
 *
 * ```ts
 * mapAtOrThrow([1, 2, 3, 4], 1, (x) => x * 10); // [1, 20, 3, 4]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     mapAtOrThrow(1, (x) => x * 10),
 * ); // [1, 20, 3, 4]
 * ```
 */
export const mapAtOrThrow: {
    <T>(idx: number, map: ArrayMap<T>): (target: T[]) => T[]
    <T>(idx: number, map: ArrayMap<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], idx: number, map: ArrayMap<T>): T[]
    <T>(target: readonly T[], idx: number, map: ArrayMap<T>): readonly T[]
} = dual(3, <T>(target: T[], idx: number, map: ArrayMap<T>): T[] => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) throw new FnError("Array.mapAtOrThrow: Index is out of range.", [target, idx, map])
    const prev = target[offset]! as T
    const next = map(prev, offset, target)
    if (is(prev, next)) return target
    target = cloneArray(target)
    target.splice(offset, 1, next)
    return target
})
