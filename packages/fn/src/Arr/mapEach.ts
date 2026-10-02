import { cloneArray } from "../cloneArray"
import { dfdlT } from "../dfdlT"

/**
 * # mapEach
 *
 * ```ts
 * function Arr.mapEach<T, U>(
 *     target: readonly T[],
 *     mapper: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => U,
 * ): readonly U[]
 * ```
 *
 * Applies the `mapper` function to each element in `array`, returning a new array with the mapped elements.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.mapEach([1, 2, 3, 4], (x) => x * 2); // [2, 4, 6, 8]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.mapEach((x) => x * 2),
 * ); // [2, 4, 6, 8]
 * ```
 *
 */
export const mapEach: {
    <T, U>(mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => U): (target: T[]) => U[]
    <T, U>(mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => U): (target: readonly T[]) => readonly U[]

    <T, U>(target: T[], mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => U): U[]
    <T, U>(target: readonly T[], mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => U): readonly U[]
} = dfdlT(<T, U>(target: T[], mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => U): U[] => {
    let result: any
    for (let i = 0; i < target.length; i++) {
        const prev = target[i]! as T
        const next = mapper(prev, i, target)
        if (prev === next as any) continue
        result ??= cloneArray(target)
        result[i] = next
    }
    return result ?? target
}, 2)
