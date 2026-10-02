import { cloneMap } from "../cloneMap"
import { dfdlT } from "../dfdlT"

/**
 * # mapOrThrow
 *
 * ```ts
 * function Maps.mapOrThrow<K, V>(
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
 * Transforms the value at the specified key using the provided function, or throws an error if the key doesn't exist.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.mapOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 *     (value) => value * 2,
 * ); // Map(2) { "a" => 2, "b" => 2 }
 *
 * Maps.mapOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 *     (value) => value * 2,
 * ); // throws FnError
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
 *     Maps.mapOrThrow("a", (value) => value * 2),
 * ); // Map(2) { "a" => 2, "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Maps.mapOrThrow("c", (value) => value * 2),
 * ); // throws FnError
 * ```
 *
 */
export const mapOrThrow: {
    <K, V>(key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): (target: Map<K, V>) => Map<K, V>
    <K, V>(key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): ReadonlyMap<K, V>
} = dfdlT(<K, V>(target: Map<K, V>, key: NoInfer<K>, transform: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => V): Map<K, V> => {
    if (!target.has(key)) throw new Error("Map.mapOrThrow: Key does not exist.")
    const prev = target.get(key)! as V
    const next = transform(prev, key, target)
    if (prev === next) return target
    const result = cloneMap(target)
    result.set(key, next)
    return result
}, 3)
