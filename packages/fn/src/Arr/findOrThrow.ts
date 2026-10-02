import { dfdlT } from "../dfdlT"

/**
 * # findOrThrow
 *
 * ```ts
 * function Arr.findOrThrow<T>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 * ): Exclude<T, null | undefined>
 * ```
 *
 * Returns the first element in `array` that satisfies the provided `predicate` function, or throws an error if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.findOrThrow([1, 2, 3, 4], (x) => x > 2); // 3
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Arr.findOrThrow((x) => x > 2),
 * ); // 3
 * ```
 *
 */
export const findOrThrow: {
    <T, U extends T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): (target: readonly T[]) => Exclude<U, null | undefined>
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: readonly T[]) => Exclude<T, null | undefined>
    <T, U extends T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): Exclude<U, null | undefined>
    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): Exclude<T, null | undefined>
} = dfdlT(<T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): any => {
    const value = target.find(predicate)
    if (value != null) return value
    throw new Error("Array.findOrThrow: Value not found.")
}, 2)
