import { dfdlT } from "../dfdlT"

/**
 * # findLast
 *
 * ```ts
 * function Arr.findLast<T>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 * ): T | undefined
 * ```
 *
 * Returns the last element in `array` that satisfies the provided `predicate` function, or `undefined` if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findLast([1, 2, 3, 4], (x) => x > 2); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findLast((x) => x > 2),
 * ); // 4
 * ```
 *
 */
export const findLast: {
    <T, U extends T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): (target: readonly T[]) => U | undefined
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: readonly T[]) => T | undefined
    <T, U extends T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): U | undefined
    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): T | undefined
} = dfdlT(<T, U extends T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): U | undefined => {
    return target.findLast(predicate)
}, 2)
