import { dfdlT } from "../dfdl/dfdlT"

/**
 * # some
 *
 * ```ts
 * function Arr.some<T>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 * ): boolean
 * ```
 *
 * Returns `true` if at least one element in `array` satisfies the provided `predicate` function, otherwise returns `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.some([1, 2, 3, 4], (x) => x > 3); // true
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.some((x) => x > 3),
 * ); // true
 * ```
 *
 */
export const some: {
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: readonly T[]) => boolean
    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): boolean
} = dfdlT(<T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): boolean => {
    return target.some(predicate)
}, 2)
