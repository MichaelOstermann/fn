import type { ArrayPredicate } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `findIndex(array, predicate)`
 *
 * Returns the index of the first element in `array` that satisfies the provided `predicate` function, or -1 if no element is found.
 *
 * ```ts
 * findIndex([1, 2, 3, 4], (x) => x > 2); // 2
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findIndex((x) => x > 2),
 * ); // 2
 * ```
 */
export const findIndex: {
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => number
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): number
} = dual(2, <T>(target: readonly T[], predicate: ArrayPredicate<T>): number => {
    return target.findIndex(predicate)
})
