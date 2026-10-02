import { dfdlT } from "../dfdl/dfdlT"
import { markAsMutable } from "../remmi/markAsMutable"

/**
 * # flatMap
 *
 * ```ts
 * function Arr.flatMap<T, U>(
 *     target: readonly T[],
 *     mapper: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => U[],
 * ): readonly U[]
 * ```
 *
 * Maps each element in `array` using the `mapper` function and flattens the result by one level.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.flatMap([1, 2, 3], (x) => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3],
 *     Arr.flatMap((x) => [x, x * 2]),
 * ); // [1, 2, 2, 4, 3, 6]
 * ```
 *
 */
export const flatMap: {
    <T, U>(mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => U[]): (target: T[]) => U[]
    <T, U>(mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => U[]): (target: readonly T[]) => readonly U[]

    <T, U>(target: T[], mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => U[]): U[]
    <T, U>(target: readonly T[], mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => U[]): readonly U[]
} = dfdlT(<T, U>(target: T[], mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => U[]): U[] => {
    let hasChanges = false
    const result = target.flatMap((a, b, c) => {
        const output = mapper(a, b, c)
        hasChanges ||= !(output.length === 1 && output[0] === a as any)
        return output
    })
    return hasChanges
        ? markAsMutable(result)
        : target as any
}, 2)
