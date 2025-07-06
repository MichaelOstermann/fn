import { dfdlT } from "@monstermann/dfdl"

/**
 * `hasAll(map, keys)`
 *
 * Checks if `map` contains all of the specified `keys`. This function supports iterables.
 *
 * ```ts
 * hasAll(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     ["a", "b"],
 * ); // true
 *
 * hasAll(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     ["a", "d"],
 * ); // false
 * ```
 *
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     hasAll(["a", "b"]),
 * ); // true
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     hasAll(["a", "d"]),
 * ); // false
 * ```
 */
export const hasAll: {
    <K, V>(keys: Iterable<NoInfer<K>>): (target: ReadonlyMap<K, V>) => boolean
    <K, V>(target: ReadonlyMap<K, V>, keys: Iterable<NoInfer<K>>): boolean
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, keys: Iterable<NoInfer<K>>): boolean => {
    for (const key of keys) {
        if (!target.has(key)) return false
    }
    return true
}, 2)
