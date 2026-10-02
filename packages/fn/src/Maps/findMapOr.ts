import { cloneMap } from "../cloneMap"
import { dfdlT } from "../dfdlT"

/**
 * # findMapOr
 *
 * ```ts
 * function Maps.findMapOr<K, V, O>(
 *     target: ReadonlyMap<K, V>,
 *     predicate: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => boolean,
 *     mapper: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => V,
 *     or: O,
 * ): ReadonlyMap<K, V> | O
 * ```
 *
 * Finds the first entry in the map that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new map with the mapped value, or `or` if no entry is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.findMapOr(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     (value) => value > 10,
 *     (value) => value * 10,
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
 *     Maps.findMapOr(
 *         (value) => value > 10,
 *         (value) => value * 10,
 *         new Map(),
 *     ),
 * ); // Map(0) {}
 * ```
 *
 */
export const findMapOr: {
    <K, V, U extends V, O>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U, mapper: (value: U, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, or: O): (target: Map<K, V>) => Map<K, V> | O
    <K, V, U extends V, O>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U, mapper: (value: U, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, or: O): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V> | O

    <K, V, O>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, mapper: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, or: O): (target: Map<K, V>) => Map<K, V> | O
    <K, V, O>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, mapper: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, or: O): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V> | O

    <K, V, U extends V, O>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U, mapper: (value: U, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, or: O): Map<K, V> | O
    <K, V, U extends V, O>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U, mapper: (value: U, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, or: O): ReadonlyMap<K, V> | O

    <K, V, O>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, mapper: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, or: O): Map<K, V> | O
    <K, V, O>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, mapper: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, or: O): ReadonlyMap<K, V> | O
} = dfdlT(<K, V, O>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, mapper: (value: V, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, or: O): ReadonlyMap<K, V> | O => {
    for (const [key, prev] of target) {
        if (predicate(prev, key, target)) {
            const next = mapper(prev, key, target)
            if (prev === next) return target
            const result = cloneMap(target)
            result.set(key, next)
            return result
        }
    }
    return or
}, 4)
