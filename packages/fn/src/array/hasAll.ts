import { dual } from "@monstermann/dfdl"

/**
 * `hasAll(array, values)`
 *
 * Returns `true` if `array` contains all `values`, otherwise returns `false`. Supports iterables for the `values` parameter.
 *
 * ```ts
 * hasAll([1, 2, 3, 4], [2, 3]); // true
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4], hasAll([2, 3])); // true
 * ```
 */
export const hasAll: {
    <T>(values: Iterable<NoInfer<T>>): (target: readonly T[]) => boolean
    <T>(target: readonly T[], values: Iterable<NoInfer<T>>): boolean
} = dual(2, <T>(target: readonly T[], values: Iterable<NoInfer<T>>): boolean => {
    for (const value of values) {
        if (!target.includes(value)) return false
    }
    return true
})
