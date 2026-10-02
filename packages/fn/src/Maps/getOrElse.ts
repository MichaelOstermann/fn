import { dfdlT } from "../dfdlT"

/**
 * # getOrElse
 *
 * ```ts
 * function Maps.getOrElse<K, V, U>(
 *     target: ReadonlyMap<K, V>,
 *     key: NoInfer<K>,
 *     orElse: (target: ReadonlyMap<K, V>) => U,
 * ): Exclude<V, null | undefined> | U
 * ```
 *
 * Gets the value associated with the specified key, or calls the provided function to compute a fallback value if the value is `null` or `undefined`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.getOrElse(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "a",
 *     () => 0,
 * ); // 1
 *
 * Maps.getOrElse(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "b",
 *     () => 0,
 * ); // 0
 *
 * Maps.getOrElse(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "c",
 *     (map) => map.size,
 * ); // 2
 * ```
 *
 * ```ts [data-last]
 * import { Maps } from "@monstermann/fn";
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     Maps.getOrElse("a", () => 0),
 * ); // 1
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     Maps.getOrElse("b", () => 0),
 * ); // 0
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     Maps.getOrElse("c", (map) => map.size),
 * ); // 2
 * ```
 *
 */
export const getOrElse: {
    <K, V, U>(key: NoInfer<K>, orElse: (target: ReadonlyMap<K, V>) => U): (target: ReadonlyMap<K, V>) => Exclude<V, null | undefined> | U
    <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, orElse: (target: ReadonlyMap<K, V>) => U): Exclude<V, null | undefined> | U
} = dfdlT(<K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, orElse: (target: ReadonlyMap<K, V>) => U): any => {
    return target.get(key) ?? orElse(target)
}, 3)
