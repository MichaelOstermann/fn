import { cloneMap } from "../cloneMap"
import { dfdlT } from "../dfdlT"

/**
 * # set
 *
 * ```ts
 * function Maps.set<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     key: NoInfer<K>,
 *     value: NoInfer<V>,
 * ): ReadonlyMap<K, V>
 * ```
 *
 * Sets or updates the value for the specified key in the map.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.set(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 *     10,
 * ); // Map(2) { "a" => 10, "b" => 2 }
 *
 * Maps.set(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 *     3,
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
 *     ]),
 *     Maps.set("a", 10),
 * ); // Map(2) { "a" => 10, "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Maps.set("c", 3),
 * ); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
 * ```
 *
 */
export const set: {
    <K, V>(key: NoInfer<K>, value: NoInfer<V>): (target: Map<K, V>) => Map<K, V>
    <K, V>(key: NoInfer<K>, value: NoInfer<V>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, key: NoInfer<K>, value: NoInfer<V>): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>, value: NoInfer<V>): ReadonlyMap<K, V>
} = dfdlT(<K, V>(target: Map<K, V>, key: NoInfer<K>, value: NoInfer<V>): Map<K, V> => {
    // A missing key is not the same as one that is set to undefined.
    if (target.get(key) === value && (value !== undefined || target.has(key))) return target
    target = cloneMap(target)
    target.set(key, value)
    return target
}, 3)
