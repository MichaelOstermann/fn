import { cloneMap } from "../cloneMap"
import { dfdlT } from "../dfdlT"

/**
 * # findRemoveOrElse
 *
 * ```ts
 * function Maps.findRemoveOrElse<K, V, O>(
 *     target: ReadonlyMap<K, V>,
 *     predicate: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => boolean,
 *     orElse: (target: ReadonlyMap<K, V>) => O,
 * ): ReadonlyMap<K, V> | O
 * ```
 *
 * Finds the first entry in the map that satisfies the provided `predicate` function and removes it, returning a new map without the removed entry, or the result of calling `orElse` with the map if no entry is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.findRemoveOrElse(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     (value) => value > 10,
 *     (map) => map.size,
 * ); // 3
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
 *     Maps.findRemoveOrElse(
 *         (value) => value > 10,
 *         (map) => map.size,
 *     ),
 * ); // 3
 * ```
 *
 */
export const findRemoveOrElse: {
    <K, V, O>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, orElse: (target: ReadonlyMap<K, V>) => O): (target: Map<K, V>) => Map<K, V> | O
    <K, V, O>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, orElse: (target: ReadonlyMap<K, V>) => O): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V> | O

    <K, V, O>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, orElse: (target: ReadonlyMap<K, V>) => O): Map<K, V> | O
    <K, V, O>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, orElse: (target: ReadonlyMap<K, V>) => O): ReadonlyMap<K, V> | O
} = dfdlT(<K, V, O>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, orElse: (target: ReadonlyMap<K, V>) => O): ReadonlyMap<K, V> | O => {
    for (const [key, value] of target) {
        if (predicate(value, key, target)) {
            const result = cloneMap(target)
            result.delete(key)
            return result
        }
    }
    return orElse(target)
}, 3)
