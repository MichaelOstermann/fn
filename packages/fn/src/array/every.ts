import type { ArrayGuard, ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `every(array, predicate)`
 *
 * Tests whether all elements in the `array` pass the test implemented by the `predicate` function. It returns `true` if all elements pass, otherwise `false`.
 *
 * ```ts
 * const isEven = (n: number) => n % 2 === 0;
 *
 * every([2, 4, 6], isEven); // true
 * every([2, 4, 7], isEven); // false
 * ```
 *
 * ```ts
 * const isEven = (n: number) => n % 2 === 0;
 *
 * pipe([2, 4, 6], every(isEven)); // true
 * pipe([2, 4, 7], every(isEven)); // false
 * ```
 */
export const every: {
    <T, U extends T>(predicate: ArrayGuard<T, U>): (target: readonly T[]) => target is U[]
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => boolean
    <T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>): target is U[]
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): boolean
} = dfdlT(<T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>): target is U[] => {
    return target.every(predicate)
}, 2)
