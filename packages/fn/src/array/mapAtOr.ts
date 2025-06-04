import type { ArrayMap } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { is } from "../function/index"
import { resolveOffset } from "./internals/offset"

/**
 * `mapAtOr(array, index, mapper, fallback)`
 *
 * Applies the `mapper` function to the element at the specified `index` in `array`, returning a new array with the mapped element, or `fallback` if the index is out of bounds.
 *
 * ```ts
 * mapAtOr([1, 2, 3], 10, (x) => x * 10, []); // []
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3],
 *     mapAtOr(10, (x) => x * 10, []),
 * ); // []
 * ```
 */
export const mapAtOr: {
    <T, U>(idx: number, map: ArrayMap<T>, or: U): (target: T[]) => T[] | U
    <T, U>(idx: number, map: ArrayMap<T>, or: U): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], idx: number, map: ArrayMap<T>, or: U): T[] | U
    <T, U>(target: readonly T[], idx: number, map: ArrayMap<T>, or: U): readonly T[] | U
} = dual(4, <T, U>(target: T[], idx: number, map: ArrayMap<T>, or: U): T[] | U => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) return or
    const prev = target[offset]! as T
    const next = map(prev, offset, target)
    if (is(prev, next)) return target
    target = cloneArray(target)
    target.splice(offset, 1, next)
    return target
})
