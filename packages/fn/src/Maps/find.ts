import { dfdlT } from "../dfdlT"

/**
 * # find
 *
 * ```ts
 * function Maps.find<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     predicate: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => boolean,
 * ): V | undefined
 * ```
 *
 * Returns the first value in the map that satisfies the provided `predicate` function, or `undefined` if no value is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.find(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     (value) => value > 2,
 * ); // 3
 * ```
 *
 * ```ts [data-last]
 * import { Maps } from "@monstermann/fn";
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     Maps.find((value) => value > 2),
 * ); // 3
 * ```
 *
 */
export const find: {
    <K, V, U extends V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): (target: ReadonlyMap<K, V>) => U | undefined
    <K, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): (target: ReadonlyMap<K, V>) => V | undefined
    <K, V, U extends V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): U | undefined
    <K, V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): V | undefined
} = dfdlT(<K, V, U extends V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): U | undefined => {
    for (const [key, value] of target) {
        if (predicate(value, key, target)) {
            return value
        }
    }
    return undefined
}, 2)
