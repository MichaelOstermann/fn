import type { ArrayGuard, ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `findLast(array, predicate)`
 *
 * Returns the last element in `array` that satisfies the provided `predicate` function, or `undefined` if no element is found.
 *
 * ```ts
 * findLast([1, 2, 3, 4], (x) => x > 2); // 4
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findLast((x) => x > 2),
 * ); // 4
 * ```
 */
export const findLast: {
    <T, U extends T>(predicate: ArrayGuard<T, U>): (target: readonly T[]) => U | undefined
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => T | undefined
    <T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>): U | undefined
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): T | undefined
} = dfdlT(<T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>): U | undefined => {
    return target.findLast(predicate)
}, 2)
