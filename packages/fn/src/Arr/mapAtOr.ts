import { cloneArray } from "../cloneArray"
import { dfdlT } from "../dfdlT"
import { resolveOffset } from "./internals/offset"

/**
 * # mapAtOr
 *
 * ```ts
 * function Arr.mapAtOr<T, U>(
 *     target: readonly T[],
 *     idx: number,
 *     map: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => T,
 *     or: U,
 * ): readonly T[] | U
 * ```
 *
 * Applies the `mapper` function to the element at the specified `index` in `array`, returning a new array with the mapped element, or `fallback` if the index is out of bounds.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.mapAtOr([1, 2, 3], 10, (x) => x * 10, []); // []
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3],
 *     Arr.mapAtOr(10, (x) => x * 10, []),
 * ); // []
 * ```
 *
 */
export const mapAtOr: {
    <T, U>(idx: number, map: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, or: U): (target: T[]) => T[] | U
    <T, U>(idx: number, map: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, or: U): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], idx: number, map: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, or: U): T[] | U
    <T, U>(target: readonly T[], idx: number, map: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, or: U): readonly T[] | U
} = dfdlT(<T, U>(target: T[], idx: number, map: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, or: U): T[] | U => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) return or
    const prev = target[offset]! as T
    const next = map(prev, offset, target)
    if (prev === next) return target
    target = cloneArray(target)
    target.splice(offset, 1, next)
    return target
}, 4)
