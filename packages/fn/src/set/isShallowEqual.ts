import { dfdlT } from "@monstermann/dfdl"

/**
 * `isShallowEqual(target, source)`
 *
 * Checks if the `target` set and `source` set contain the same values. Returns `true` if both sets have the same size and contain identical elements, `false` otherwise.
 *
 * ```ts
 * isShallowEqual(new Set([1, 2, 3]), new Set([3, 2, 1])); // true
 * isShallowEqual(new Set([1, 2]), new Set([1, 2, 3])); // false
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2, 3]), isShallowEqual(new Set([3, 2, 1]))); // true
 * pipe(new Set([1, 2]), isShallowEqual(new Set([1, 2, 3]))); // false
 * ```
 */
export const isShallowEqual: {
    <T>(source: ReadonlySet<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean => {
    if (target.size !== source.size) return false
    for (const a of target) {
        if (!source.has(a)) return false
    }
    for (const b of source) {
        if (!target.has(b)) return false
    }
    return true
}, 2)
