import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"

/**
 * # findMapLastOrElse
 *
 * ```ts
 * function Arr.findMapLastOrElse<T, V>(
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
 *     orElse: (target: readonly NoInfer<T>[]) => V,
 * ): readonly T[] | V
 * ```
 *
 * Finds the last element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or the result of calling `callback` with the array if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findMapLastOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 10,
 *     (x) => x * 10,
 *     (arr) => arr.length,
 * ); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findMapLastOrElse(
 *         (x) => x > 10,
 *         (x) => x * 10,
 *         (arr) => arr.length,
 *     ),
 * ); // 4
 * ```
 *
 */
export const findMapLastOrElse: {
    <T, U extends T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<U>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): (target: T[]) => T[] | V
    <T, U extends T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<U>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): (target: readonly T[]) => readonly T[] | V

    <T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): (target: T[]) => T[] | V
    <T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): (target: readonly T[]) => readonly T[] | V

    <T, U extends T, V>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<U>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): T[] | V
    <T, U extends T, V>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<U>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): readonly T[] | V

    <T, V>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): T[] | V
    <T, V>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): readonly T[] | V
} = dfdlT(<T, V>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): T[] | V => {
    const idx = target.findLastIndex(predicate)
    if (idx === -1) return orElse(target)
    const prev = target[idx]! as T
    const next = mapper(prev, idx, target)
    if (prev === next) return target
    const result = cloneArray(target)
    result.splice(idx, 1, next)
    return result
}, 4)
