import { dfdlT } from "@monstermann/dfdl"

/**
 * `hasAll(target, values)`
 *
 * Checks if the `target` set contains all of the specified `values` from an iterable. Returns `true` if all values exist, `false` otherwise.
 *
 * ```ts
 * hasAll(new Set([1, 2, 3]), [1, 2]); // true
 * hasAll(new Set([1, 2, 3]), [1, 4]); // false
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2, 3]), hasAll([1, 2])); // true
 * pipe(new Set([1, 2, 3]), hasAll([1, 4])); // false
 * ```
 */
export const hasAll: {
    <T>(values: Iterable<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean => {
    for (const value of values) {
        if (!target.has(value)) return false
    }
    return true
}, 2)
