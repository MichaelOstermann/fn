import { dfdlT } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"
import { FnError } from "../function/FnError"

/**
 * `removeOrThrow(map, key)`
 *
 * Removes the entry with the specified `key` from `map`, throwing an error if the key doesn't exist.
 *
 * ```ts
 * removeOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 * ); // Map(1) { "b" => 2 }
 *
 * removeOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 * ); // throws FnError
 * ```
 *
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     removeOrThrow("a"),
 * ); // Map(1) { "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     removeOrThrow("c"),
 * ); // throws FnError
 * ```
 */
export const removeOrThrow: {
    <K, V>(key: NoInfer<K>): (target: ReadonlyMap<K, V>) => Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): Map<K, V>
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): Map<K, V> => {
    if (!target.has(key)) throw new FnError("Map.removeOrThrow: Key does not exist.", [target, key])
    const result = cloneMap(target)
    result.delete(key)
    return result
}, 2)
