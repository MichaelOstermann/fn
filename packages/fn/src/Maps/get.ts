import { dfdlT } from "../dfdl/dfdlT"

/**
 * # get
 *
 * ```ts
 * function Maps.get<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     key: NoInfer<K>,
 * ): V | undefined
 * ```
 *
 * Gets the value associated with the specified key, or `undefined` if the key doesn't exist.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.get(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 * ); // 1
 *
 * Maps.get(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 * ); // undefined
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
 *     Maps.get("a"),
 * ); // 1
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Maps.get("c"),
 * ); // undefined
 * ```
 *
 */
export const get: {
    <K, V>(key: NoInfer<K>): (target: ReadonlyMap<K, V>) => V | undefined
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): V | undefined
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): V | undefined => {
    return target.get(key)
}, 2)
