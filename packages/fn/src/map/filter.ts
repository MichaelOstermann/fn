import type { MapGuard, MapPredicate } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"

/**
 * `filter(map, predicate)`
 *
 * Filters `map` by keeping only the entries where `predicate` returns true for the value.
 *
 * ```ts
 * filter(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     (value) => value > 1,
 * ); // Map(2) { "b" => 2, "c" => 3 }
 * ```
 *
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     filter((value) => value > 1),
 * ); // Map(2) { "b" => 2, "c" => 3 }
 * ```
 */
export const filter: {
    <K, V, U extends V>(predicate: MapGuard<K, V, U>): (target: Map<K, V>) => Map<K, U>
    <K, V, U extends V>(predicate: MapGuard<K, V, U>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, U>

    <K, V>(predicate: MapPredicate<K, V>): (target: Map<K, V>) => Map<K, V>
    <K, V>(predicate: MapPredicate<K, V>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V, U extends V>(target: Map<K, V>, predicate: MapGuard<K, V, U>): Map<K, U>
    <K, V, U extends V>(target: ReadonlyMap<K, V>, predicate: MapGuard<K, V, U>): ReadonlyMap<K, U>

    <K, V>(target: Map<K, V>, predicate: MapPredicate<K, V>): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, predicate: MapPredicate<K, V>): ReadonlyMap<K, V>
} = dual(2, (target: any, predicate: any): any => {
    let result
    for (const [key, value] of target) {
        if (!predicate(value, key, target)) {
            result ??= cloneMap(target)
            result.delete(key)
        }
    }
    return result ?? target
})
