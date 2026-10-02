import { cloneMap } from "../cloneMap"
import { dfdlT } from "../dfdlT"

/**
 * # remove
 *
 * ```ts
 * function Maps.remove<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     key: NoInfer<K>,
 * ): ReadonlyMap<K, V>
 * ```
 *
 * Removes the specified key from the map. Returns the original map if the key doesn't exist.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.remove(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 * ); // Map(1) { "b" => 2 }
 *
 * Maps.remove(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 * ); // Map(2) { "a" => 1, "b" => 2 }
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
 *     Maps.remove("a"),
 * ); // Map(1) { "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Maps.remove("c"),
 * ); // Map(2) { "a" => 1, "b" => 2 }
 * ```
 *
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
