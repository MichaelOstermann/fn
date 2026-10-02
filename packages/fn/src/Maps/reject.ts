import { cloneMap } from "../cloneMap"
import { dfdlT } from "../dfdlT"

/**
 * # reject
 *
 * ```ts
 * function Maps.reject<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     by: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => boolean,
 * ): ReadonlyMap<K, V>
 * ```
 *
 * Returns a new map excluding entries that satisfy the predicate function.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.reject(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     (value) => value > 1,
 * ); // Map(1) { "a" => 1 }
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
 *     Maps.reject((value) => value > 1),
 * ); // Map(1) { "a" => 1 }
 * ```
 *
 */
export const reject: {
    <K, V, U extends V>(by: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): (target: Map<K, V>) => Map<K, Exclude<V, U>>
    <K, V, U extends V>(by: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, Exclude<V, U>>

    <K, V>(by: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): (target: Map<K, V>) => Map<K, V>
    <K, V>(by: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V, U extends V>(target: Map<K, V>, by: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): Map<K, Exclude<V, U>>
    <K, V, U extends V>(target: ReadonlyMap<K, V>, by: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): ReadonlyMap<K, Exclude<V, U>>

    <K, V>(target: Map<K, V>, by: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, by: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): ReadonlyMap<K, V>
} = dfdlT((target: any, by: any): any => {
    let result
    for (const [key, value] of target) {
        if (by(value, key, target)) {
            result ??= cloneMap(target)
            result.delete(key)
        }
    }
    return result ?? target
}, 2)
