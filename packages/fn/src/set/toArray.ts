import { dfdlT } from "@monstermann/dfdl"

/**
 * `toArray(target)`
 *
 * Converts the `target` set to an array containing all its values.
 *
 * ```ts
 * toArray(new Set([1, 2, 3])); // [1, 2, 3]
 * toArray(new Set(["a", "b"])); // ['a', 'b']
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2, 3]), toArray()); // [1, 2, 3]
 * pipe(new Set(["a", "b"]), toArray()); // ['a', 'b']
 * ```
 */
export const toArray: {
    (): <T>(target: ReadonlySet<T>) => T[]
    <T>(target: ReadonlySet<T>): T[]
} = dfdlT(<T>(target: ReadonlySet<T>): T[] => {
    return Array.from(target)
}, 1)
