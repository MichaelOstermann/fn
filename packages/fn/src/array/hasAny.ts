import { dual } from "@monstermann/dfdl"

/**
 * `hasAny(array, values)`
 *
 * Returns `true` if `array` contains any of the `values`, otherwise returns `false`. Supports iterables for the `values` parameter.
 *
 * ```ts
 * hasAny([1, 2, 3, 4], [5, 6, 2]); // true
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4], hasAny([5, 6, 2])); // true
 * ```
 */
export const hasAny: {
    <T>(values: Iterable<NoInfer<T>>): (target: readonly T[]) => boolean
    <T>(target: readonly T[], values: Iterable<NoInfer<T>>): boolean
} = dual(2, <T>(target: readonly T[], values: Iterable<NoInfer<T>>): boolean => {
    for (const value of values) {
        if (target.includes(value)) return true
    }
    return false
})
