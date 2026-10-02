import { dfdlT } from "../dfdl/dfdlT"

/**
 * # forEach
 *
 * ```ts
 * function Arr.forEach<T>(
 *     target: readonly T[],
 *     callback: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => any,
 * ): readonly T[]
 * ```
 *
 * Executes the provided `callback` function once for each element in `array` and returns the original array.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.forEach([1, 2, 3], (x) => console.log(x)); // [1, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3],
 *     Arr.forEach((x) => console.log(x)),
 * ); // [1, 2, 3]
 * ```
 *
 */
export const forEach: {
    <T>(callback: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => any): (target: T[]) => T[]
    <T>(callback: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => any): (target: readonly T[]) => readonly T[]

    <T>(target: T[], callback: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => any): T[]
    <T>(target: readonly T[], callback: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => any): readonly T[]
} = dfdlT(<T>(target: T[], callback: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => any): T[] => {
    target.forEach(callback)
    return target
}, 2)
