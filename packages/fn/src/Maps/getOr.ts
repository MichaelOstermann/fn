import { dfdlT } from "../dfdlT"

/**
 * # getOr
 *
 * ```ts
 * function Maps.getOr<K, V, U>(
 *     target: ReadonlyMap<K, V>,
 *     key: NoInfer<K>,
 *     or: U,
 * ): Exclude<V, null | undefined> | U
 * ```
 *
 * Gets the value associated with the specified key, or returns the fallback value if the value is `null` or `undefined`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.getOr(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "a",
 *     0,
 * ); // 1
 *
 * Maps.getOr(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "b",
 *     0,
 * ); // 0
 *
 * Maps.getOr(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "c",
 *     0,
 * ); // 0
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
 *     Maps.getOr("a", 0),
 * ); // 1
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     Maps.getOr("b", 0),
 * ); // 0
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     Maps.getOr("c", 0),
 * ); // 0
 * ```
 *
 */
export const getOr: {
    <K, V, U>(key: NoInfer<K>, or: U): (target: ReadonlyMap<K, V>) => Exclude<V, null | undefined> | U
    <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, or: U): Exclude<V, null | undefined> | U
} = dfdlT(<K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, or: U): any => {
    return target.get(key) ?? or
}, 3)
