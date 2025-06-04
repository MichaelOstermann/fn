import type { MapGuard, MapPredicate } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"

/**
 * `reject(map, by)`
 *
 * Rejects entries from `map` where `by` returns true for the value.
 *
 * ```ts
 * reject(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     (value) => value > 1,
 * ); // Map(1) { "a" => 1 }
 * ```
 *
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     reject((value) => value > 1),
 * ); // Map(1) { "a" => 1 }
 * ```
 */
export const reject: {
    <K, V, U extends V>(by: MapGuard<K, V, U>): (target: Map<K, V>) => Map<K, Exclude<V, U>>
    <K, V, U extends V>(by: MapGuard<K, V, U>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, Exclude<V, U>>

    <K, V>(by: MapPredicate<K, V>): (target: Map<K, V>) => Map<K, V>
    <K, V>(by: MapPredicate<K, V>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V, U extends V>(target: Map<K, V>, by: MapGuard<K, V, U>): Map<K, Exclude<V, U>>
    <K, V, U extends V>(target: ReadonlyMap<K, V>, by: MapGuard<K, V, U>): ReadonlyMap<K, Exclude<V, U>>

    <K, V>(target: Map<K, V>, by: MapPredicate<K, V>): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, by: MapPredicate<K, V>): ReadonlyMap<K, V>
} = dual(2, (target: any, by: any): any => {
    let result
    for (const [key, value] of target) {
        if (by(value, key, target)) {
            result ??= cloneMap(target)
            result.delete(key)
        }
    }
    return result ?? target
})
