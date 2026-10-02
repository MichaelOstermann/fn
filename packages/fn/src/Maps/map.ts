import { dfdlT } from "../dfdl/dfdlT"
import { cloneMap } from "../remmi/cloneMap"

/**
 * # map
 *
 * ```ts
 * function Maps.map<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     key: NoInfer<K>,
 *     transform: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => V,
 * ): ReadonlyMap<K, V>
 * ```
 *
 * Transforms the value at the specified key using the provided function. Returns the original map if the key doesn't exist.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.map(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 *     (value) => value * 2,
 * ); // Map(2) { "a" => 2, "b" => 2 }
 *
 * Maps.map(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 *     (value) => value * 2,
 * ); // Map(2) { "a" => 1, "b" => 2 }
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
 *     Maps.map("a", (value) => value * 2),
 * ); // Map(2) { "a" => 2, "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Maps.map("c", (value) => value * 2),
 * ); // Map(2) { "a" => 1, "b" => 2 }
 * ```
 *
 */
export const map: {
    <K, V>(key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): (target: Map<K, V>) => Map<K, V>
    <K, V>(key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): ReadonlyMap<K, V>
} = dfdlT(<K, V>(target: Map<K, V>, key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): Map<K, V> => {
    if (!target.has(key)) return target
    const prev = target.get(key)! as V
    const next = transform(prev, key, target)
    if (prev === next) return target
    const result = cloneMap(target)
    result.set(key, next)
    return result
}, 3)
