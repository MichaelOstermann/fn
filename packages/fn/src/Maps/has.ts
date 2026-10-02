import { dfdlT } from "../dfdlT"

/**
 * # has
 *
 * ```ts
 * function Maps.has<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     key: NoInfer<K>,
 * ): boolean
 * ```
 *
 * Checks whether the map contains the specified key.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.has(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 * ); // true
 *
 * Maps.has(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 * ); // false
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
 *     Maps.has("a"),
 * ); // true
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Maps.has("c"),
 * ); // false
 * ```
 *
 */
export const has: {
    <K, V>(key: NoInfer<K>): (target: ReadonlyMap<K, V>) => boolean
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): boolean
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): boolean => {
    return target.has(key)
}, 2)
