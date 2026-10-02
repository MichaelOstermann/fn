import { cloneMap } from "../cloneMap"
import { dfdlT } from "../dfdlT"

/**
 * # removeOrThrow
 *
 * ```ts
 * function Maps.removeOrThrow<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     key: NoInfer<K>,
 * ): Map<K, V>
 * ```
 *
 * Removes the specified key from the map, or throws an error if the key doesn't exist.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.removeOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 * ); // Map(1) { "b" => 2 }
 *
 * Maps.removeOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 * ); // throws FnError
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
 *     Maps.removeOrThrow("a"),
 * ); // Map(1) { "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Maps.removeOrThrow("c"),
 * ); // throws FnError
 * ```
 *
 */
export const removeOrThrow: {
    <K, V>(key: NoInfer<K>): (target: ReadonlyMap<K, V>) => Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): Map<K, V>
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): Map<K, V> => {
    if (!target.has(key)) throw new Error("Map.removeOrThrow: Key does not exist.")
    const result = cloneMap(target)
    result.delete(key)
    return result
}, 2)
