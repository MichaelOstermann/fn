import { dfdlT } from "../dfdl/dfdlT"

/**
 * # findOr
 *
 * ```ts
 * function Maps.findOr<K, V, O>(
 *     target: ReadonlyMap<K, V>,
 *     predicate: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => boolean,
 *     or: O,
 * ): V | O
 * ```
 *
 * Returns the first value in the map that satisfies the provided `predicate` function, or `or` if no value is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.findOr(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     (value) => value > 10,
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
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     Maps.findOr((value) => value > 10, 0),
 * ); // 0
 * ```
 *
 */
export const findOr: {
    <K, V, U extends V, O>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U, or: O): (target: ReadonlyMap<K, V>) => U | O
    <K, V, O>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, or: O): (target: ReadonlyMap<K, V>) => V | O
    <K, V, U extends V, O>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U, or: O): U | O
    <K, V, O>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean, or: O): V | O
} = dfdlT(<K, V, U extends V, O>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U, or: O): V | O => {
    for (const [key, value] of target) {
        if (predicate(value, key, target)) {
            return value
        }
    }
    return or
}, 3)
