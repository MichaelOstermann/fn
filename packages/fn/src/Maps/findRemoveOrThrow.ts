import { dfdlT } from "../dfdl/dfdlT"
import { cloneMap } from "../remmi/cloneMap"

/**
 * # findRemoveOrThrow
 *
 * ```ts
 * function Maps.findRemoveOrThrow<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     predicate: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => boolean,
 * ): ReadonlyMap<K, V>
 * ```
 *
 * Finds the first entry in the map that satisfies the provided `predicate` function and removes it, returning a new map without the removed entry, or throws an error if no entry is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.findRemoveOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     (value) => value > 1,
 * ); // Map(2) { "a" => 1, "c" => 3 }
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
 *     Maps.findRemoveOrThrow((value) => value > 1),
 * ); // Map(2) { "a" => 1, "c" => 3 }
 * ```
 *
 */
export const findRemoveOrThrow: {
    <K, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): (target: Map<K, V>) => Map<K, V>
    <K, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): ReadonlyMap<K, V>
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): ReadonlyMap<K, V> => {
    for (const [key, value] of target) {
        if (predicate(value, key, target)) {
            const result = cloneMap(target)
            result.delete(key)
            return result
        }
    }
    throw new Error("Map.findRemoveOrThrow: Value not found.")
}, 2)
