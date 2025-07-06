import type { NonNil } from "../internals/types"
import type { ArrayGuard, ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `findOr(array, predicate, fallback)`
 *
 * Returns the first element in `array` that satisfies the provided `predicate` function, or `fallback` if no element is found.
 *
 * ```ts
 * findOr([1, 2, 3, 4], (x) => x > 10, 0); // 0
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findOr((x) => x > 10, 0),
 * ); // 0
 * ```
 */
export const findOr: {
    <T, U extends T, V>(predicate: ArrayGuard<T, U>, or: V): (target: readonly T[]) => NonNil<U> | V
    <T, V>(predicate: ArrayPredicate<T>, or: V): (target: readonly T[]) => NonNil<T> | V
    <T, U extends T, V>(target: readonly T[], predicate: ArrayGuard<T, U>, or: V): NonNil<U> | V
    <T, V>(target: readonly T[], predicate: ArrayPredicate<T>, or: V): NonNil<T> | V
} = dfdlT(<T, U extends T, V>(target: readonly T[], predicate: ArrayGuard<T, U>, or: V): any => {
    return target.find(predicate) ?? or
}, 3)
