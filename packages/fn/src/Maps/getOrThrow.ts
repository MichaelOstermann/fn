import { dfdlT } from "../dfdl/dfdlT"

/**
 * # getOrThrow
 *
 * ```ts
 * function Maps.getOrThrow<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     key: NoInfer<K>,
 * ): Exclude<V, null | undefined>
 * ```
 *
 * Gets the value associated with the specified key, or throws an error if the value is `null` or `undefined`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.getOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 * ); // 1
 *
 * Maps.getOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "b",
 * ); // throws FnError
 *
 * Maps.getOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
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
 *     Maps.getOrThrow("a"),
 * ); // 1
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     Maps.getOrThrow("b"),
 * ); // throws FnError
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Maps.getOrThrow("c"),
 * ); // throws FnError
 * ```
 *
 */
export const getOrThrow: {
    <K, V>(key: NoInfer<K>): (target: ReadonlyMap<K, V>) => Exclude<V, null | undefined>
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): Exclude<V, null | undefined>
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): any => {
    const value = target.get(key)
    if (value != null) return value
    throw new Error("Map.getOrThrow: Value not found.")
}, 2)
