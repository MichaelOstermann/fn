import { cloneMap } from "../cloneMap"
import { dfdlT } from "../dfdlT"

/**
 * # findReplaceOr
 *
 * ```ts
 * function Maps.findReplaceOr<K, V, O>(
 *     target: ReadonlyMap<K, V>,
 *     predicate: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => boolean,
 *     replacement: NoInfer<V>,
 *     or: O,
 * ): ReadonlyMap<K, V> | O
 * ```
 *
 * Finds the first entry in the map that satisfies the provided `predicate` function and replaces its value with `replacement`, returning a new map with the replaced value, or `or` if no entry is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.findReplaceOr(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     (value) => value > 10,
 *     99,
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
 *     Maps.findReplaceOr((value) => value > 10, 99, new Map()),
 * ); // Map(0) {}
 * ```
 *
 */
export const findReplaceOr: {
    <K, V, O>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, replacement: NoInfer<V>, or: O): (target: Map<K, V>) => Map<K, V> | O
    <K, V, O>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, replacement: NoInfer<V>, or: O): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V> | O

    <K, V, O>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, replacement: NoInfer<V>, or: O): Map<K, V> | O
    <K, V, O>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, replacement: NoInfer<V>, or: O): ReadonlyMap<K, V> | O
} = dfdlT(<K, V, O>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, replacement: NoInfer<V>, or: O): ReadonlyMap<K, V> | O => {
    for (const [key, prev] of target) {
        if (predicate(prev, key, target)) {
            if (prev === replacement) return target
            const result = cloneMap(target)
            result.set(key, replacement)
            return result
        }
    }
    return or
}, 4)
