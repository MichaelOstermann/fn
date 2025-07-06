import type { ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `findLastIndex(array, predicate)`
 *
 * Returns the index of the last element in `array` that satisfies the provided `predicate` function, or -1 if no element is found.
 *
 * ```ts
 * findLastIndex([1, 2, 3, 4], (x) => x > 2); // 3
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findLastIndex((x) => x > 2),
 * ); // 3
 * ```
 */
export const findLastIndex: {
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => number
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): number
} = dfdlT(<T>(target: readonly T[], predicate: ArrayPredicate<T>): number => {
    return target.findLastIndex(predicate)
}, 2)
