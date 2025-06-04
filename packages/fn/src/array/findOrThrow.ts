import type { NonNil } from "../internals/types"
import type { ArrayGuard, ArrayPredicate } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `findOrThrow(array, predicate)`
 *
 * Returns the first element in `array` that satisfies the provided `predicate` function, or throws an error if no element is found.
 *
 * ```ts
 * findOrThrow([1, 2, 3, 4], (x) => x > 2); // 3
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     findOrThrow((x) => x > 2),
 * ); // 3
 * ```
 */
export const findOrThrow: {
    <T, U extends T>(predicate: ArrayGuard<T, U>): (target: readonly T[]) => NonNil<U>
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => NonNil<T>
    <T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>): NonNil<U>
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): NonNil<T>
} = dual(2, <T>(target: readonly T[], predicate: ArrayPredicate<T>): any => {
    const value = target.find(predicate)
    if (value != null) return value
    throw new FnError("Array.findOrThrow: Value not found.", [target, predicate])
})
