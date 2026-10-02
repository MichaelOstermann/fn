import { cloneMap } from "../cloneMap"
import { dfdlT } from "../dfdlT"

/**
 * # mapOr
 *
 * ```ts
 * function Maps.mapOr<K, V, U>(
 *     target: ReadonlyMap<K, V>,
 *     key: NoInfer<K>,
 *     transform: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => V,
 *     or: U,
 * ): ReadonlyMap<K, V> | U
 * ```
 *
 * Transforms the value at the specified key using the provided function, or returns the fallback value if the key doesn't exist.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.mapOr(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 *     (value) => value * 2,
 *     null,
 * ); // Map(2) { "a" => 2, "b" => 2 }
 *
 * Maps.mapOr(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 *     (value) => value * 2,
 *     null,
 * ); // null
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
 *     Maps.mapOr("a", (value) => value * 2, null),
 * ); // Map(2) { "a" => 2, "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Maps.mapOr("c", (value) => value * 2, null),
 * ); // null
 * ```
 *
 */
export const mapOr: {
    <K, V, U>(key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, or: U): (target: Map<K, V>) => Map<K, V> | U
    <K, V, U>(key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, or: U): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V> | U

    <K, V, U>(target: Map<K, V>, key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, or: U): Map<K, V> | U
    <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, or: U): ReadonlyMap<K, V> | U
} = dfdlT(<K, V, U>(target: Map<K, V>, key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V, or: U): Map<K, V> | U => {
    if (!target.has(key)) return or
    const prev = target.get(key)! as V
    const next = transform(prev, key, target)
    if (prev === next) return target
    const result = cloneMap(target)
    result.set(key, next)
    return result
}, 4)
