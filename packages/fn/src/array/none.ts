import type { ArrayGuard, ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `none(array, predicate)`
 *
 * Returns `true` if no elements in `array` satisfy the provided `predicate` function, otherwise returns `false`.
 *
 * ```ts
 * none([1, 2, 3, 4], (x) => x > 10); // true
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     none((x) => x > 10),
 * ); // true
 * ```
 */
export const none: {
    <T, U extends T>(predicate: ArrayGuard<T, U>): (target: readonly T[]) => target is Exclude<T, U>[]
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => boolean
    <T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>): target is Exclude<T, U>[]
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): boolean
} = dfdlT(<T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>): target is Exclude<T, U>[] => {
    return !target.some(predicate)
}, 2)
