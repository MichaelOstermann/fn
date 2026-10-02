import { dfdlT } from "../dfdl/dfdlT"
import { cloneMap } from "../remmi/cloneMap"

/**
 * # mapOrElse
 *
 * ```ts
 * function Maps.mapOrElse<K, V, U>(
 *     target: ReadonlyMap<K, V>,
 *     key: NoInfer<K>,
 *     transform: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => V,
 *     orElse: (target: ReadonlyMap<K, V>) => U,
 * ): ReadonlyMap<K, V> | U
 * ```
 *
 * Transforms the value at the specified key using the provided function, or calls the fallback function if the key doesn't exist.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.mapOrElse(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 *     (value) => value * 2,
 *     () => null,
 * ); // Map(2) { "a" => 2, "b" => 2 }
 *
 * Maps.mapOrElse(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 *     (value) => value * 2,
 *     (map) => map.size,
 * ); // 2
 * ```
 *
 * ```ts [data-last]
 * import { Maps } from "@monstermann/fn";
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Maps.mapOrElse(
 *         "a",
 *         (value) => value * 2,
 *         () => null,
 *     ),
 * ); // Map(2) { "a" => 2, "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Maps.mapOrElse(
 *         "c",
 *         (value) => value * 2,
 *         (map) => map.size,
 *     ),
 * ); // 2
 * ```
 *
 */
export const mapOrElse: {
    <K, V, U>(key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, orElse: (target: ReadonlyMap<K, V>) => U): (target: Map<K, V>) => Map<K, V> | U
    <K, V, U>(key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, orElse: (target: ReadonlyMap<K, V>) => U): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V> | U

    <K, V, U>(target: Map<K, V>, key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, orElse: (target: ReadonlyMap<K, V>) => U): Map<K, V> | U
    <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, orElse: (target: ReadonlyMap<K, V>) => U): ReadonlyMap<K, V> | U
} = dfdlT(<K, V, U>(target: Map<K, V>, key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, orElse: (target: ReadonlyMap<K, V>) => U): Map<K, V> | U => {
    if (!target.has(key)) return orElse(target)
    const prev = target.get(key)! as V
    const next = transform(prev, key, target)
    if (prev === next) return target
    const result = cloneMap(target)
    result.set(key, next)
    return result
}, 4)
