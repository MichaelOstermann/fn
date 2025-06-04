import { dual } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"

/**
 * `removeAll(map, keys)`
 *
 * Removes all entries with the specified `keys` from `map`, returning a new map. This function supports iterables.
 *
 * ```ts
 * removeAll(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     ["a", "c"],
 * ); // Map(1) { "b" => 2 }
 *
 * removeAll(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     ["d", "e"],
 * ); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
 * ```
 *
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     removeAll(["a", "c"]),
 * ); // Map(1) { "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     removeAll(["d", "e"]),
 * ); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
 * ```
 */
export const removeAll: {
    <K, V>(keys: Iterable<NoInfer<K>>): (target: Map<K, V>) => Map<K, V>
    <K, V>(keys: Iterable<NoInfer<K>>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, keys: Iterable<NoInfer<K>>): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, keys: Iterable<NoInfer<K>>): ReadonlyMap<K, V>
} = dual(2, <K, V>(target: Map<K, V>, keys: Iterable<NoInfer<K>>): Map<K, V> => {
    let result
    for (const key of keys) {
        if (!target.has(key)) continue
        result ??= cloneMap(target)
        result.delete(key)
    }
    return result ?? target
})
