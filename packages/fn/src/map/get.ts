import { dfdlT } from "@monstermann/dfdl"

/**
 * `get(map, key)`
 *
 * Gets the value associated with `key` from `map`, returning `undefined` if the key doesn't exist.
 *
 * ```ts
 * get(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 * ); // 1
 *
 * get(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 * ); // undefined
 * ```
 *
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     get("a"),
 * ); // 1
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     get("c"),
 * ); // undefined
 * ```
 */
export const get: {
    <K, V>(key: NoInfer<K>): (target: ReadonlyMap<K, V>) => V | undefined
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): V | undefined
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): V | undefined => {
    return target.get(key)
}, 2)
