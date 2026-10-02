import { cloneArray } from "../cloneArray"
import { dfdlT } from "../dfdlT"

/**
 * # findMapLastOr
 *
 * ```ts
 * function Arr.findMapLastOr<T, V>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 *     mapper: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => T,
 *     or: V,
 * ): readonly T[] | V
 * ```
 *
 * Finds the last element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or `fallback` if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findMapLastOr(
 *     [1, 2, 3, 4],
 *     (x) => x > 10,
 *     (x) => x * 10,
 *     [],
 * ); // []
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findMapLastOr(
 *         (x) => x > 10,
 *         (x) => x * 10,
 *         [],
 *     ),
 * ); // []
 * ```
 *
 */
export const findMapLastOr: {
    <T, U extends T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<U>, index: number, target: readonly NoInfer<T>[]) => T, or: V): (target: T[]) => T[] | V
    <T, U extends T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<U>, index: number, target: readonly NoInfer<T>[]) => T, or: V): (target: readonly T[]) => readonly T[] | V

    <T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, or: V): (target: T[]) => T[] | V
    <T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, or: V): (target: readonly T[]) => readonly T[] | V

    <T, U extends T, V>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<U>, index: number, target: readonly NoInfer<T>[]) => T, or: V): T[] | V
    <T, U extends T, V>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<U>, index: number, target: readonly NoInfer<T>[]) => T, or: V): readonly T[] | V

    <T, V>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, or: V): T[] | V
    <T, V>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, or: V): readonly T[] | V
} = dfdlT(<T, V>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, or: V): T[] | V => {
    const idx = target.findLastIndex(predicate)
    if (idx === -1) return or
    const prev = target[idx]! as T
    const next = mapper(prev, idx, target)
    if (prev === next) return target
    const result = cloneArray(target)
    result.splice(idx, 1, next)
    return result
}, 4)
