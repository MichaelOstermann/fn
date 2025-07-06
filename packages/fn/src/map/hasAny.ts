import { dfdlT } from "@monstermann/dfdl"

/**
 * `hasAny(map, keys)`
 *
 * Checks if `map` contains any of the specified `keys`. This function supports iterables.
 *
 * ```ts
 * hasAny(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     ["a", "c"],
 * ); // true
 *
 * hasAny(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     ["c", "d"],
 * ); // false
 * ```
 *
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     hasAny(["a", "c"]),
 * ); // true
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     hasAny(["c", "d"]),
 * ); // false
 * ```
 */
export const hasAny: {
    <K, V>(keys: Iterable<NoInfer<K>>): (target: ReadonlyMap<K, V>) => boolean
    <K, V>(target: ReadonlyMap<K, V>, keys: Iterable<NoInfer<K>>): boolean
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, keys: Iterable<NoInfer<K>>): boolean => {
    for (const key of keys) {
        if (target.has(key)) return true
    }
    return false
}, 2)
