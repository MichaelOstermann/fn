import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"
import { addRange, createRange, hasRange, spliceRange } from "./internals/range"

/**
 * # reject
 *
 * ```ts
 * function Arr.reject<T>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 * ): readonly T[]
 * ```
 *
 * Returns a new array with elements from `array` that do not satisfy the provided `predicate` function.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.reject([1, 2, 3, 4, 5], (x) => x % 2 === 0); // [1, 3, 5]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4, 5],
 *     Arr.reject((x) => x % 2 === 0),
 * ); // [1, 3, 5]
 * ```
 *
 */
export const reject: {
    <T, U extends T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): (target: T[]) => Exclude<T, U>[]
    <T, U extends T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): (target: readonly T[]) => readonly Exclude<T, U>[]

    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: T[]) => T[]
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: readonly T[]) => readonly T[]

    <T, U extends T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): Exclude<T, U>[]
    <T, U extends T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): readonly Exclude<T, U>[]

    <T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): T[]
    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): readonly T[]
} = dfdlT(<T, U extends T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): Exclude<T, U>[] => {
    const range = createRange()

    for (let i = 0; i < target.length; i++) {
        if (predicate(target[i]!, i, target)) {
            addRange(range, i)
        }
    }

    if (hasRange(range)) {
        target = cloneArray(target)
        spliceRange(target, range)
    }

    return target as any
}, 2)
