import { cloneMap } from "../cloneMap"
import { dfdlT } from "../dfdlT"

/**
 * # findRemoveOr
 *
 * ```ts
 * function Maps.findRemoveOr<K, V, O>(
 *     target: ReadonlyMap<K, V>,
 *     predicate: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => boolean,
 *     or: O,
 * ): ReadonlyMap<K, V> | O
 * ```
 *
 * Finds the first entry in the map that satisfies the provided `predicate` function and removes it, returning a new map without the removed entry, or `or` if no entry is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.findRemoveOr(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     (value) => value > 10,
 *     new Map(),
 * ); // Map(0) {}
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
 *     Maps.findRemoveOr((value) => value > 10, new Map()),
 * ); // Map(0) {}
 * ```
 *
 */
export const findRemoveOr: {
    <K, V, O>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, or: O): (target: Map<K, V>) => Map<K, V> | O
    <K, V, O>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, or: O): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V> | O

    <K, V, O>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, or: O): Map<K, V> | O
    <K, V, O>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, or: O): ReadonlyMap<K, V> | O
} = dfdlT(<K, V, O>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, or: O): ReadonlyMap<K, V> | O => {
    for (const [key, value] of target) {
        if (predicate(value, key, target)) {
            const result = cloneMap(target)
            result.delete(key)
            return result
        }
    }
    return or
}, 3)
