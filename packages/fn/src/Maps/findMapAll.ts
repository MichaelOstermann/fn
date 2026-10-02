import { dfdlT } from "../dfdl/dfdlT"
import { cloneMap } from "../remmi/cloneMap"

/**
 * # findMapAll
 *
 * ```ts
 * function Maps.findMapAll<K, V>(
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
 * ): ReadonlyMap<K, V>
 * ```
 *
 * Finds all entries in the map that satisfy the provided `predicate` function and applies the `mapper` function to each of them, returning a new map with the mapped values.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.findMapAll(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     (value) => value > 1,
 *     (value) => value * 10,
 * ); // Map(3) { "a" => 1, "b" => 20, "c" => 30 }
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
 *     Maps.findMapAll(
 *         (value) => value > 1,
 *         (value) => value * 10,
 *     ),
 * ); // Map(3) { "a" => 1, "b" => 20, "c" => 30 }
 * ```
 *
 */
export const findMapAll: {
    <K, V, U extends V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U, mapper: (value: U, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): (target: Map<K, V>) => Map<K, V>
    <K, V, U extends V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U, mapper: (value: U, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, mapper: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): (target: Map<K, V>) => Map<K, V>
    <K, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, mapper: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V, U extends V>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U, mapper: (value: U, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): Map<K, V>
    <K, V, U extends V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U, mapper: (value: U, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, mapper: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, mapper: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): ReadonlyMap<K, V>
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, mapper: (value: V, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): ReadonlyMap<K, V> => {
    let result: Map<K, V> | undefined
    for (const [key, prev] of target) {
        if (!predicate(prev, key, target)) continue
        const next = mapper(prev, key, target)
        if (prev === next) continue
        result ??= cloneMap(target)
        result.set(key, next)
    }
    return result ?? target
}, 3)
