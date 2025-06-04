import { dual } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `set(map, key, value)`
 *
 * Sets the `value` for the specified `key` in `map`, returning a new map if the value changes.
 *
 * ```ts
 * set(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 *     10,
 * ); // Map(2) { "a" => 10, "b" => 2 }
 *
 * set(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 *     3,
 * ); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
 * ```
 *
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     set("a", 10),
 * ); // Map(2) { "a" => 10, "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     set("c", 3),
 * ); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
 * ```
 */
export const set: {
    <K, V>(key: NoInfer<K>, value: NoInfer<V>): (target: Map<K, V>) => Map<K, V>
    <K, V>(key: NoInfer<K>, value: NoInfer<V>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, key: NoInfer<K>, value: NoInfer<V>): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>, value: NoInfer<V>): ReadonlyMap<K, V>
} = dual(3, <K, V>(target: Map<K, V>, key: NoInfer<K>, value: NoInfer<V>): Map<K, V> => {
    if (is(target.get(key), value)) return target
    target = cloneMap(target)
    target.set(key, value)
    return target
})
