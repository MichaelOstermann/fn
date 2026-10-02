import { dfdlT } from "../dfdl/dfdlT"

/**
 * # countBy
 *
 * ```ts
 * function Arr.countBy<T>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 * ): number
 * ```
 *
 * Counts the number of elements in the `target` array satisfy the provided `predicate` function.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * const isEven = (n) => n % 2 === 0;
 * Arr.countBy([1, 2, 3, 4, 5], isEven); // 2
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * const isEven = (n) => n % 2 === 0;
 * pipe([1, 2, 3, 4, 5], Arr.countBy(isEven)); // 2
 * ```
 *
 */
export const countBy: {
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: readonly T[]) => number
    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): number
} = dfdlT(<T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): number => {
    return target.reduce((acc, value, idx, target) => acc + (predicate(value, idx, target) ? 1 : 0), 0)
}, 2)
