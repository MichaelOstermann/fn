import { cloneMap } from "../cloneMap"
import { dfdlT } from "../dfdlT"

/**
 * # removeOrElse
 *
 * ```ts
 * function Maps.removeOrElse<K, V, U>(
 *     target: ReadonlyMap<K, V>,
 *     key: NoInfer<K>,
 *     orElse: (target: ReadonlyMap<K, V>) => U,
 * ): Map<K, V> | U
 * ```
 *
 * Removes the specified key from the map, or calls the fallback function if the key doesn't exist.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.removeOrElse(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 *     () => null,
 * ); // Map(1) { "b" => 2 }
 *
 * Maps.removeOrElse(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 *     (map) => map.size,
 * ); // 2
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
 *     Maps.removeOrElse("a", () => null),
 * ); // Map(1) { "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Maps.removeOrElse("c", (map) => map.size),
 * ); // 2
 * ```
 *
 */
export const removeOrElse: {
    <K, V, U>(key: NoInfer<K>, orElse: (target: ReadonlyMap<K, V>) => U): (target: ReadonlyMap<K, V>) => Map<K, V> | U
    <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, orElse: (target: ReadonlyMap<K, V>) => U): Map<K, V> | U
} = dfdlT(<K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, orElse: (target: ReadonlyMap<K, V>) => U): Map<K, V> | U => {
    if (!target.has(key)) return orElse(target)
    const result = cloneMap(target)
    result.delete(key)
    return result
}, 3)
