import { dfdlT } from "../dfdlT"

/**
 * # findOrElse
 *
 * ```ts
 * function Maps.findOrElse<K, V, O>(
 *     target: ReadonlyMap<K, V>,
 *     predicate: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => boolean,
 *     orElse: (target: ReadonlyMap<K, V>) => O,
 * ): V | O
 * ```
 *
 * Returns the first value in the map that satisfies the provided `predicate` function, or the result of calling `orElse` with the map if no value is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.findOrElse(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     (value) => value > 10,
 *     (map) => map.size,
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
 *     Maps.findOrElse(
 *         (value) => value > 10,
 *         (map) => map.size,
 *     ),
 * ); // 3
 * ```
 *
 */
export const findOrElse: {
    <K, V, U extends V, O>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U, orElse: (target: ReadonlyMap<K, Exclude<V, U>>) => O): (target: ReadonlyMap<K, V>) => U | O
    <K, V, O>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, orElse: (target: ReadonlyMap<K, V>) => O): (target: ReadonlyMap<K, V>) => V | O
    <K, V, U extends V, O>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U, orElse: (target: ReadonlyMap<K, Exclude<V, U>>) => O): U | O
    <K, V, O>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, orElse: (target: ReadonlyMap<K, V>) => O): V | O
} = dfdlT(<K, V, O>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, orElse: (target: ReadonlyMap<K, V>) => O): V | O => {
    for (const [key, value] of target) {
        if (predicate(value, key, target)) {
            return value
        }
    }
    return orElse(target)
}, 3)
