import { dfdlT } from "../dfdl/dfdlT"
import { cloneMap } from "../remmi/cloneMap"

/**
 * # removeOr
 *
 * ```ts
 * function Maps.removeOr<K, V, U>(
 *     target: ReadonlyMap<K, V>,
 *     key: NoInfer<K>,
 *     or: U,
 * ): Map<K, V> | U
 * ```
 *
 * Removes the specified key from the map, or returns the fallback value if the key doesn't exist.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.removeOr(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 *     null,
 * ); // Map(1) { "b" => 2 }
 *
 * Maps.removeOr(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 *     null,
 * ); // null
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
 *     Maps.removeOr("a", null),
 * ); // Map(1) { "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Maps.removeOr("c", null),
 * ); // null
 * ```
 *
 */
export const removeOr: {
    <K, V, U>(key: NoInfer<K>, or: U): (target: ReadonlyMap<K, V>) => Map<K, V> | U
    <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, or: U): Map<K, V> | U
} = dfdlT(<K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, or: U): Map<K, V> | U => {
    if (!target.has(key)) return or
    const result = cloneMap(target)
    result.delete(key)
    return result
}, 3)
