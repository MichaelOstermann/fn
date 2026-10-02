import { cloneMap } from "../cloneMap"
import { dfdlT } from "../dfdlT"

/**
 * # findMapOrThrow
 *
 * ```ts
 * function Maps.findMapOrThrow<K, V>(
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
 * Finds the first entry in the map that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new map with the mapped value, or throws an error if no entry is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.findMapOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     (value) => value > 1,
 *     (value) => value * 10,
 * ); // Map(3) { "a" => 1, "b" => 20, "c" => 3 }
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
 *     Maps.findMapOrThrow(
 *         (value) => value > 1,
 *         (value) => value * 10,
 *     ),
 * ); // Map(3) { "a" => 1, "b" => 20, "c" => 3 }
 * ```
 *
 */
export const findMapOrThrow: {
    <K, V, U extends V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U, mapper: (value: U, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): (target: Map<K, V>) => Map<K, V>
    <K, V, U extends V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U, mapper: (value: U, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, mapper: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): (target: Map<K, V>) => Map<K, V>
    <K, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, mapper: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V, U extends V>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U, mapper: (value: U, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): Map<K, V>
    <K, V, U extends V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U, mapper: (value: U, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, mapper: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, mapper: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): ReadonlyMap<K, V>
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, mapper: (value: V, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): ReadonlyMap<K, V> => {
    for (const [key, prev] of target) {
        if (predicate(prev, key, target)) {
            const next = mapper(prev, key, target)
            if (prev === next) return target
            const result = cloneMap(target)
            result.set(key, next)
            return result
        }
    }
    throw new Error("Map.findMapOrThrow: Value not found.")
}, 3)
