import type { ArrayGuard, ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `partition(array, predicate)`
 *
 * Splits `array` into two arrays based on the `predicate` function, returning a tuple where the first array contains elements that satisfy the predicate and the second contains those that don't.
 *
 * ```ts
 * partition([1, 2, 3, 4, 5], (x) => x % 2 === 0); // [[2, 4], [1, 3, 5]]
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4, 5],
 *     partition((x) => x % 2 === 0),
 * ); // [[2, 4], [1, 3, 5]]
 * ```
 */
export const partition: {
    <T, U extends T>(predicate: ArrayGuard<T, U>): (target: readonly T[]) => [U[], Exclude<T, U>[]]
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => [T[], T[]]
    <T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>): [U[], Exclude<T, U>[]]
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): [T[], T[]]
} = dfdlT(<T>(target: readonly T[], predicate: (value: NoInfer<T>, idx: number, target: readonly T[]) => boolean): [T[], T[]] => {
    const left: T[] = []
    const right: T[] = []

    for (let i = 0; i < target.length; i++) {
        const value = target[i]!
        if (predicate(value, i, target))
            left.push(value)
        else
            right.push(value)
    }

    return [left, right] as const
}, 2)
