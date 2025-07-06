import { dfdlT } from "@monstermann/dfdl"

/**
 * `has(target, value)`
 *
 * Checks if the `target` set contains the specified `value`. Returns `true` if the value exists, `false` otherwise.
 *
 * ```ts
 * has(new Set([1, 2, 3]), 2); // true
 * has(new Set([1, 2, 3]), 4); // false
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2, 3]), has(2)); // true
 * pipe(new Set([1, 2, 3]), has(4)); // false
 * ```
 */
export const has: {
    <T>(value: NoInfer<T>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, value: NoInfer<T>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, value: NoInfer<T>): boolean => {
    return target.has(value)
}, 2)
