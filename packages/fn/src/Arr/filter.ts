import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"
import { addRange, createRange, hasRange, spliceRange } from "./internals/range"

/**
 * # filter
 *
 * ```ts
 * function Arr.filter<T>(
 *     target: readonly T[],
 *     by: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 * ): readonly T[]
 * ```
 *
 * Filters elements from `target` array based on the predicate function `by`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.filter([1, 2, 3, 4], (x) => x > 2); // [3, 4]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.filter((x) => x > 2),
 * ); // [3, 4]
 * ```
 *
 */
export const filter: {
    <T, U extends T>(by: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): (target: T[]) => U[]
    <T, U extends T>(by: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): (target: readonly T[]) => readonly U[]

    <T>(by: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: T[]) => T[]
    <T>(by: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: readonly T[]) => readonly T[]

    <T, U extends T>(target: T[], by: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): U[]
    <T, U extends T>(target: readonly T[], by: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): readonly U[]

    <T>(target: T[], by: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): T[]
    <T>(target: readonly T[], by: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): readonly T[]
} = dfdlT(<T, U extends T>(target: T[], by: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): (T | U)[] => {
    const range = createRange()

    for (let i = 0; i < target.length; i++) {
        if (!by(target[i]!, i, target)) {
            addRange(range, i)
        }
    }

    if (hasRange(range)) {
        const result = cloneArray(target)
        spliceRange(result, range)
        return result
    }

    return target
}, 2)
