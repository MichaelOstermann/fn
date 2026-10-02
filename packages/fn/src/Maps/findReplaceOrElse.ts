import { dfdlT } from "../dfdl/dfdlT"
import { cloneMap } from "../remmi/cloneMap"

/**
 * # findReplaceOrElse
 *
 * ```ts
 * function Maps.findReplaceOrElse<K, V, O>(
 *     target: ReadonlyMap<K, V>,
 *     predicate: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => boolean,
 *     replacement: NoInfer<V>,
 *     orElse: (target: ReadonlyMap<K, V>) => O,
 * ): ReadonlyMap<K, V> | O
 * ```
 *
 * Finds the first entry in the map that satisfies the provided `predicate` function and replaces its value with `replacement`, returning a new map with the replaced value, or the result of calling `orElse` with the map if no entry is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.findReplaceOrElse(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     (value) => value > 10,
 *     99,
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
 *     Maps.findReplaceOrElse(
 *         (value) => value > 10,
 *         99,
 *         (map) => map.size,
 *     ),
 * ); // 3
 * ```
 *
 */
export const findReplaceOrElse: {
    <K, V, O>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, replacement: NoInfer<V>, orElse: (target: ReadonlyMap<K, V>) => O): (target: Map<K, V>) => Map<K, V> | O
    <K, V, O>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, replacement: NoInfer<V>, orElse: (target: ReadonlyMap<K, V>) => O): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V> | O

    <K, V, O>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, replacement: NoInfer<V>, orElse: (target: ReadonlyMap<K, V>) => O): Map<K, V> | O
    <K, V, O>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, replacement: NoInfer<V>, orElse: (target: ReadonlyMap<K, V>) => O): ReadonlyMap<K, V> | O
} = dfdlT(<K, V, O>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, replacement: NoInfer<V>, orElse: (target: ReadonlyMap<K, V>) => O): ReadonlyMap<K, V> | O => {
    for (const [key, prev] of target) {
        if (predicate(prev, key, target)) {
            if (prev === replacement) return target
            const result = cloneMap(target)
            result.set(key, replacement)
            return result
        }
    }
    return orElse(target)
}, 4)
