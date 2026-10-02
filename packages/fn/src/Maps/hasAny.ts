import { dfdlT } from "../dfdl/dfdlT"

/**
 * # hasAny
 *
 * ```ts
 * function Maps.hasAny<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     keys: Iterable<NoInfer<K>>,
 * ): boolean
 * ```
 *
 * Checks whether the map contains any of the specified keys.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.hasAny(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     ["a", "c"],
 * ); // true
 *
 * Maps.hasAny(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     ["c", "d"],
 * ); // false
 * ```
 *
 * ```ts [data-last]
 * import { Maps } from "@monstermann/fn";
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Maps.hasAny(["a", "c"]),
 * ); // true
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Maps.hasAny(["c", "d"]),
 * ); // false
 * ```
 *
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
