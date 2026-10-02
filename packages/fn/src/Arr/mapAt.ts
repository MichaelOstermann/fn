import { cloneArray } from "../cloneArray"
import { dfdlT } from "../dfdlT"
import { resolveOffset } from "./internals/offset"

/**
 * # mapAt
 *
 * ```ts
 * function Arr.mapAt<T>(
 *     target: readonly T[],
 *     idx: number,
 *     map: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => T,
 * ): readonly T[]
 * ```
 *
 * Applies the `mapper` function to the element at the specified `index` in `array`, returning a new array with the mapped element.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.mapAt([1, 2, 3, 4], 1, (x) => x * 10); // [1, 20, 3, 4]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.mapAt(1, (x) => x * 10),
 * ); // [1, 20, 3, 4]
 * ```
 *
 */
export const mapAt: {
    <T>(idx: number, map: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): (target: T[]) => T[]
    <T>(idx: number, map: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): (target: readonly T[]) => readonly T[]

    <T>(target: T[], idx: number, map: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): T[]
    <T>(target: readonly T[], idx: number, map: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): readonly T[]
} = dfdlT(<T>(target: T[], idx: number, map: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): T[] => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) return target
    const prev = target[offset]! as T
    const next = map(prev, offset, target)
    if (prev === next) return target
    target = cloneArray(target)
    target.splice(offset, 1, next)
    return target
}, 3)
