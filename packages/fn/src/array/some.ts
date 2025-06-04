import type { ArrayPredicate } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `some(array, predicate)`
 *
 * Returns `true` if at least one element in `array` satisfies the provided `predicate` function, otherwise returns `false`.
 *
 * ```ts
 * some([1, 2, 3, 4], (x) => x > 3); // true
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     some((x) => x > 3),
 * ); // true
 * ```
 */
export const some: {
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => boolean
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): boolean
} = dual(2, <T>(target: readonly T[], predicate: ArrayPredicate<T>): boolean => {
    return target.some(predicate)
})
