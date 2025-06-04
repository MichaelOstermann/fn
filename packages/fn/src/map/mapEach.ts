import type { MapMap } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `mapEach(map, fn)`
 *
 * Maps each value in `map` using `fn`, returning a new map with the transformed values.
 *
 * ```ts
 * mapEach(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     (value, key) => value * 2,
 * ); // Map(2) { "a" => 2, "b" => 4 }
 * ```
 *
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     mapEach((value, key) => value * 2),
 * ); // Map(2) { "a" => 2, "b" => 4 }
 * ```
 */
export const mapEach: {
    <K, V, U>(fn: MapMap<K, V, U>): (target: Map<K, V>) => Map<K, U>
    <K, V, U>(fn: MapMap<K, V, U>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, U>

    <K, V, U>(target: Map<K, V>, fn: MapMap<K, V, U>): Map<K, U>
    <K, V, U>(target: ReadonlyMap<K, V>, fn: MapMap<K, V, U>): ReadonlyMap<K, U>
} = dual(2, (target: any, fn: any): any => {
    let result
    for (const [k, prev] of target) {
        const next = fn(prev, k, target)
        if (is(prev, next)) continue
        result ??= cloneMap(target)
        result.set(k, next)
    }
    return result ?? target
})
