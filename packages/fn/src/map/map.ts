import type { MapMap } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `map(map, key, transform)`
 *
 * Transforms the value at `key` in `map` using `transform`, returning a new map if the value changes.
 *
 * ```ts
 * mapEntry(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 *     (value) => value * 2,
 * ); // Map(2) { "a" => 2, "b" => 2 }
 *
 * mapEntry(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 *     (value) => value * 2,
 * ); // Map(2) { "a" => 1, "b" => 2 }
 * ```
 *
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     mapEntry("a", (value) => value * 2),
 * ); // Map(2) { "a" => 2, "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     mapEntry("c", (value) => value * 2),
 */
export const map: {
    <K, V>(key: NoInfer<K>, transform: MapMap<K, V>): (target: Map<K, V>) => Map<K, V>
    <K, V>(key: NoInfer<K>, transform: MapMap<K, V>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, key: NoInfer<K>, transform: MapMap<K, V>): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>, transform: MapMap<K, V>): ReadonlyMap<K, V>
} = dual(3, <K, V>(target: Map<K, V>, key: NoInfer<K>, transform: MapMap<K, V>): Map<K, V> => {
    if (!target.has(key)) return target
    const prev = target.get(key)! as V
    const next = transform(prev, key, target)
    if (is(prev, next)) return target
    const result = cloneMap(target)
    result.set(key, next)
    return result
})
