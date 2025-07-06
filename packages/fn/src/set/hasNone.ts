import { dfdlT } from "@monstermann/dfdl"

/**
 * `hasNone(target, values)`
 *
 * Checks if the `target` set contains none of the specified `values` from an iterable. Returns `true` if no values exist in the set, `false` otherwise.
 *
 * ```ts
 * hasNone(new Set([1, 2, 3]), [4, 5]); // true
 * hasNone(new Set([1, 2, 3]), [3, 4]); // false
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2, 3]), hasNone([4, 5])); // true
 * pipe(new Set([1, 2, 3]), hasNone([3, 4])); // false
 * ```
 */
export const hasNone: {
    <T>(values: Iterable<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean => {
    for (const value of values) {
        if (target.has(value)) return false
    }
    return true
}, 2)
