import { dfdlT } from "../dfdl/dfdlT"

/**
 * # findOr
 *
 * ```ts
 * function Arr.findOr<T, V>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 *     or: V,
 * ): Exclude<T, null | undefined> | V
 * ```
 *
 * Returns the first element in `array` that satisfies the provided `predicate` function, or `fallback` if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findOr([1, 2, 3, 4], (x) => x > 10, 0); // 0
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findOr((x) => x > 10, 0),
 * ); // 0
 * ```
 *
 */
export const findOr: {
    <T, U extends T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, or: V): (target: readonly T[]) => Exclude<U, null | undefined> | V
    <T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, or: V): (target: readonly T[]) => Exclude<T, null | undefined> | V
    <T, U extends T, V>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, or: V): Exclude<U, null | undefined> | V
    <T, V>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, or: V): Exclude<T, null | undefined> | V
} = dfdlT(<T, U extends T, V>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, or: V): any => {
    return target.find(predicate) ?? or
}, 3)
