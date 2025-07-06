import type { MapMap, OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `mapOrElse(map, key, transform, orElse)`
 *
 * Transforms the value at `key` in `map` using `transform`, calling `orElse` with the map if the key doesn't exist.
 *
 * ```ts
 * mapOrElse(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 *     (value) => value * 2,
 *     () => null,
 * ); // Map(2) { "a" => 2, "b" => 2 }
 *
 * mapOrElse(
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
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     mapOrElse(
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
 *     mapOrElse(
 *         "c",
 *         (value) => value * 2,
 *         (map) => map.size,
 *     ),
 * ); // 2
 * ```
 */
export const mapOrElse: {
    <K, V, U>(key: NoInfer<K>, transform: MapMap<K, V>, orElse: OrElse<K, V, U>): (target: Map<K, V>) => Map<K, V> | U
    <K, V, U>(key: NoInfer<K>, transform: MapMap<K, V>, orElse: OrElse<K, V, U>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V> | U

    <K, V, U>(target: Map<K, V>, key: NoInfer<K>, transform: MapMap<K, V>, orElse: OrElse<K, V, U>): Map<K, V> | U
    <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, transform: MapMap<K, V>, orElse: OrElse<K, V, U>): ReadonlyMap<K, V> | U
} = dfdlT(<K, V, U>(target: Map<K, V>, key: NoInfer<K>, transform: MapMap<K, V>, orElse: OrElse<K, V, U>): Map<K, V> | U => {
    if (!target.has(key)) return orElse(target)
    const prev = target.get(key)! as V
    const next = transform(prev, key, target)
    if (is(prev, next)) return target
    const result = cloneMap(target)
    result.set(key, next)
    return result
}, 4)
