import { dfdlT } from "@monstermann/dfdl"

/**
 * `hasNone(array, values)`
 *
 * Returns `true` if `array` contains none of the `values`, otherwise returns `false`. Supports iterables for the `values` parameter.
 *
 * ```ts
 * hasNone([1, 2, 3, 4], [5, 6, 7]); // true
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4], hasNone([5, 6, 7])); // true
 * ```
 */
export const hasNone: {
    <T, U extends T>(values: Iterable<U>): (target: readonly T[]) => target is Exclude<T, U>[]
    <T, U extends T>(target: readonly T[], values: Iterable<U>): target is Exclude<T, U>[]
} = dfdlT(<T, U extends T>(target: readonly T[], values: Iterable<U>): target is Exclude<T, U>[] => {
    for (const value of values) {
        if (target.includes(value)) return false
    }
    return true
}, 2)
