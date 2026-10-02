import { cloneArray } from "../cloneArray"
import { dfdlT } from "../dfdlT"

/**
 * # findMapOrThrow
 *
 * ```ts
 * function Arr.findMapOrThrow<T>(
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
 * ): readonly T[]
 * ```
 *
 * Finds the first element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or throws an error if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findMapOrThrow(
 *     [1, 2, 3, 4],
 *     (x) => x > 2,
 *     (x) => x * 10,
 * ); // [1, 2, 30, 4]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findMapOrThrow(
 *         (x) => x > 2,
 *         (x) => x * 10,
 *     ),
 * ); // [1, 2, 30, 4]
 * ```
 *
 */
export const findMapOrThrow: {
    <T, U extends T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<U>, index: number, target: readonly NoInfer<T>[]) => T): (target: T[]) => T[]
    <T, U extends T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<U>, index: number, target: readonly NoInfer<T>[]) => T): (target: readonly T[]) => readonly T[]

    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): (target: T[]) => T[]
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): (target: readonly T[]) => readonly T[]

    <T, U extends T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<U>, index: number, target: readonly NoInfer<T>[]) => T): T[]
    <T, U extends T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<U>, index: number, target: readonly NoInfer<T>[]) => T): readonly T[]

    <T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): T[]
    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): readonly T[]
} = dfdlT(<T, U extends T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): T[] => {
    const idx = target.findIndex(predicate)
    if (idx === -1) throw new Error("Array.findMapOrThrow: Value not found.")
    const prev = target[idx]! as T
    const next = mapper(prev, idx, target)
    if (prev === next) return target
    const result = cloneArray(target)
    result.splice(idx, 1, next)
    return result
}, 3)
