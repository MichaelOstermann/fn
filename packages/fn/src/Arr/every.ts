import { dfdlT } from "../dfdlT"

/**
 * # every
 *
 * ```ts
 * function Arr.every<T>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 * ): boolean
 * ```
 *
 * Tests whether all elements in the `array` pass the test implemented by the `predicate` function. It returns `true` if all elements pass, otherwise `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * const isEven = (n: number) => n % 2 === 0;
 *
 * Arr.every([2, 4, 6], isEven); // true
 * Arr.every([2, 4, 7], isEven); // false
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * const isEven = (n: number) => n % 2 === 0;
 *
 * pipe([2, 4, 6], Arr.every(isEven)); // true
 * pipe([2, 4, 7], Arr.every(isEven)); // false
 * ```
 *
 */
export const every: {
    <T, U extends T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): (target: T[]) => target is U[]
    <T, U extends T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): (target: readonly T[]) => target is readonly U[]

    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: readonly T[]) => boolean

    <T, U extends T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): target is U[]
    <T, U extends T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): target is readonly U[]

    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): boolean
} = dfdlT((<T, U extends T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): target is U[] => {
    return target.every(predicate)
}) as any, 2)
