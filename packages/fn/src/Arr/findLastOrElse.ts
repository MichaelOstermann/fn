import { dfdlT } from "../dfdlT"

/**
 * # findLastOrElse
 *
 * ```ts
 * function Arr.findLastOrElse<T, V>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 *     orElse: (target: readonly NoInfer<T>[]) => V,
 * ): Exclude<T, null | undefined> | V
 * ```
 *
 * Returns the last element in `array` that satisfies the provided `predicate` function, or the result of calling `callback` with the array if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findLastOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 10,
 *     (arr) => arr.length,
 * ); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findLastOrElse(
 *         (x) => x > 10,
 *         (arr) => arr.length,
 *     ),
 * ); // 4
 * ```
 *
 */
export const findLastOrElse: {
    <T, U extends T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, orElse: (target: readonly Exclude<T, V>[]) => V): (target: readonly T[]) => Exclude<U, null | undefined> | V
    <T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, orElse: (target: readonly NoInfer<T>[]) => V): (target: readonly T[]) => Exclude<T, null | undefined> | V
    <T, U extends T, V>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, orElse: (target: readonly Exclude<T, V>[]) => V): Exclude<U, null | undefined> | V
    <T, V>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, orElse: (target: readonly NoInfer<T>[]) => V): Exclude<T, null | undefined> | V
} = dfdlT(<T, V>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, orElse: (target: readonly NoInfer<T>[]) => V): any => {
    return target.findLast(predicate) ?? orElse(target)
}, 3)
