import { dfdlT } from "../dfdlT"

/**
 * # findLastOrThrow
 *
 * ```ts
 * function Arr.findLastOrThrow<T>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 * ): Exclude<T, null | undefined>
 * ```
 *
 * Returns the last element in `array` that satisfies the provided `predicate` function, or throws an error if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findLastOrThrow([1, 2, 3, 4], (x) => x > 2); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findLastOrThrow((x) => x > 2),
 * ); // 4
 * ```
 *
 */
export const findLastOrThrow: {
    <T, U extends T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): (target: readonly T[]) => Exclude<U, null | undefined>
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: readonly T[]) => Exclude<T, null | undefined>
    <T, U extends T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): Exclude<U, null | undefined>
    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): Exclude<T, null | undefined>
} = dfdlT(<T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): any => {
    const value = target.findLast(predicate)
    if (value != null) return value
    throw new Error("Array.findLastOrThrow: Value not found.")
}, 2)
