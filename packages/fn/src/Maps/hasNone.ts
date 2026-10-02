import { dfdlT } from "../dfdl/dfdlT"

/**
 * # hasNone
 *
 * ```ts
 * function Maps.hasNone<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     keys: Iterable<NoInfer<K>>,
 * ): boolean
 * ```
 *
 * Checks whether the map contains none of the specified keys.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.hasNone(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     ["c", "d"],
 * ); // true
 *
 * Maps.hasNone(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     ["a", "c"],
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
 *     Maps.hasNone(["c", "d"]),
 * ); // true
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Maps.hasNone(["a", "c"]),
 * ); // false
 * ```
 *
 */
export const hasNone: {
    <K, V>(keys: Iterable<NoInfer<K>>): (target: ReadonlyMap<K, V>) => boolean
    <K, V>(target: ReadonlyMap<K, V>, keys: Iterable<NoInfer<K>>): boolean
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, keys: Iterable<NoInfer<K>>): boolean => {
    for (const key of keys) {
        if (target.has(key)) return false
    }
    return true
}, 2)
