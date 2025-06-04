import type { MapMap } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `forEach(map, fn)`
 *
 * Executes `fn` for each entry in `map` and returns the original map.
 *
 * ```ts
 * forEach(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     (value, key) => console.log(key, value),
 * ); // Map(2) { "a" => 1, "b" => 2 }
 * ```
 *
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     forEach((value, key) => console.log(key, value)),
 * ); // Map(2) { "a" => 1, "b" => 2 }
 * ```
 */
export const forEach: {
    <K, V>(fn: MapMap<K, V, any>): (target: Map<K, V>) => Map<K, V>
    <K, V>(fn: MapMap<K, V, any>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, fn: MapMap<K, V, any>): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, fn: MapMap<K, V, any>): ReadonlyMap<K, V>
} = dual(2, <K, V>(target: Map<K, V>, fn: MapMap<K, V, any>): Map<K, V> => {
    target.forEach(fn)
    return target
})
