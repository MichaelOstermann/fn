import { dfdlT } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"

/**
 * `removeOr(map, key, or)`
 *
 * Removes the entry with the specified `key` from `map`, returning `or` if the key doesn't exist.
 *
 * ```ts
 * removeOr(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 *     null,
 * ); // Map(1) { "b" => 2 }
 *
 * removeOr(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
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
 *     removeOr("a", null),
 * ); // Map(1) { "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     removeOr("c", null),
 * ); // null
 * ```
 */
export const removeOr: {
    <K, V, U>(key: NoInfer<K>, or: U): (target: ReadonlyMap<K, V>) => Map<K, V> | U
    <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, or: U): Map<K, V> | U
} = dfdlT(<K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, or: U): Map<K, V> | U => {
    if (!target.has(key)) return or
    const result = cloneMap(target)
    result.delete(key)
    return result
}, 3)
