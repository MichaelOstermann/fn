import { dfdlT } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"

/**
 * `remove(map, key)`
 *
 * Removes the entry with the specified `key` from `map`, returning a new map.
 *
 * ```ts
 * remove(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 * ); // Map(1) { "b" => 2 }
 *
 * remove(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 * ); // Map(2) { "a" => 1, "b" => 2 }
 * ```
 *
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     remove("a"),
 * ); // Map(1) { "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     remove("c"),
 * ); // Map(2) { "a" => 1, "b" => 2 }
 * ```
 */
export const remove: {
    <K, V>(key: NoInfer<K>): (target: Map<K, V>) => Map<K, V>
    <K, V>(key: NoInfer<K>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, key: NoInfer<K>): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): ReadonlyMap<K, V>
} = dfdlT(<K, V>(target: Map<K, V>, key: NoInfer<K>): Map<K, V> => {
    if (!target.has(key)) return target
    target = cloneMap(target)
    target.delete(key)
    return target
}, 2)
