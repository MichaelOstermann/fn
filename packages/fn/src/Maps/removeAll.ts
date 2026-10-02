import { dfdlT } from "../dfdl/dfdlT"
import { cloneMap } from "../remmi/cloneMap"

/**
 * # removeAll
 *
 * ```ts
 * function Maps.removeAll<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     keys: Iterable<NoInfer<K>>,
 * ): ReadonlyMap<K, V>
 * ```
 *
 * Removes all specified keys from the map.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.removeAll(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     ["a", "c"],
 * ); // Map(1) { "b" => 2 }
 *
 * Maps.removeAll(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     ["d", "e"],
 * ); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
 * ```
 *
 * ```ts [data-last]
 * import { Maps } from "@monstermann/fn";
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     Maps.removeAll(["a", "c"]),
 * ); // Map(1) { "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     Maps.removeAll(["d", "e"]),
 * ); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
 * ```
 *
 */
export const removeAll: {
    <K, V>(keys: Iterable<NoInfer<K>>): (target: Map<K, V>) => Map<K, V>
    <K, V>(keys: Iterable<NoInfer<K>>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, keys: Iterable<NoInfer<K>>): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, keys: Iterable<NoInfer<K>>): ReadonlyMap<K, V>
} = dfdlT(<K, V>(target: Map<K, V>, keys: Iterable<NoInfer<K>>): Map<K, V> => {
    let result
    for (const key of keys) {
        if (!target.has(key)) continue
        result ??= cloneMap(target)
        result.delete(key)
    }
    return result ?? target
}, 2)
