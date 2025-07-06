import type { MapMap } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `mapOr(map, key, transform, or)`
 *
 * Transforms the value at `key` in `map` using `transform`, returning `or` if the key doesn't exist.
 *
 * ```ts
 * mapOr(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 *     (value) => value * 2,
 *     null,
 * ); // Map(2) { "a" => 2, "b" => 2 }
 *
 * mapOr(
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
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     mapOr("a", (value) => value * 2, null),
 * ); // Map(2) { "a" => 2, "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     mapOr("c", (value) => value * 2, null),
 * ); // null
 * ```
 */
export const mapOr: {
    <K, V, U>(key: NoInfer<K>, transform: MapMap<K, V>, or: U): (target: Map<K, V>) => Map<K, V> | U
    <K, V, U>(key: NoInfer<K>, transform: MapMap<K, V>, or: U): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V> | U

    <K, V, U>(target: Map<K, V>, key: NoInfer<K>, transform: MapMap<K, V>, or: U): Map<K, V> | U
    <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, transform: MapMap<K, V>, or: U): ReadonlyMap<K, V> | U
} = dfdlT(<K, V, U>(target: Map<K, V>, key: NoInfer<K>, transform: MapMap<K, V>, or: U): Map<K, V> | U => {
    if (!target.has(key)) return or
    const prev = target.get(key)! as V
    const next = transform(prev, key, target)
    if (is(prev, next)) return target
    const result = cloneMap(target)
    result.set(key, next)
    return result
}, 4)
