import { dfdlT } from "../dfdl/dfdlT"
import { cloneMap } from "../remmi/cloneMap"

/**
 * # findReplaceOrThrow
 *
 * ```ts
 * function Maps.findReplaceOrThrow<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     predicate: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => boolean,
 *     replacement: NoInfer<V>,
 * ): ReadonlyMap<K, V>
 * ```
 *
 * Finds the first entry in the map that satisfies the provided `predicate` function and replaces its value with `replacement`, returning a new map with the replaced value, or throws an error if no entry is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.findReplaceOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     (value) => value > 1,
 *     99,
 * ); // Map(3) { "a" => 1, "b" => 99, "c" => 3 }
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
 *     Maps.findReplaceOrThrow((value) => value > 1, 99),
 * ); // Map(3) { "a" => 1, "b" => 99, "c" => 3 }
 * ```
 *
 */
export const findReplaceOrThrow: {
    <K, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, replacement: NoInfer<V>): (target: Map<K, V>) => Map<K, V>
    <K, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, replacement: NoInfer<V>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, replacement: NoInfer<V>): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, replacement: NoInfer<V>): ReadonlyMap<K, V>
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, replacement: NoInfer<V>): ReadonlyMap<K, V> => {
    for (const [key, prev] of target) {
        if (predicate(prev, key, target)) {
            if (prev === replacement) return target
            const result = cloneMap(target)
            result.set(key, replacement)
            return result
        }
    }
    throw new Error("Map.findReplaceOrThrow: Value not found.")
}, 3)
