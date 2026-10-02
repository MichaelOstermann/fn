import { dfdlT } from "../dfdl/dfdlT"

/**
 * # every
 *
 * ```ts
 * function Maps.every<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     predicate: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => boolean,
 * ): boolean
 * ```
 *
 * Tests whether all entries in the map pass the test implemented by the `predicate` function. It returns `true` if all entries pass, otherwise `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.every(
 *     new Map([
 *         ["a", 2],
 *         ["b", 4],
 *         ["c", 6],
 *     ]),
 *     (value) => value % 2 === 0,
 * ); // true
 * ```
 *
 * ```ts [data-last]
 * import { Maps } from "@monstermann/fn";
 *
 * pipe(
 *     new Map([
 *         ["a", 2],
 *         ["b", 4],
 *         ["c", 6],
 *     ]),
 *     Maps.every((value) => value % 2 === 0),
 * ); // true
 * ```
 *
 */
export const every: {
    <K, V, U extends V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): (target: Map<K, V>) => target is Map<K, U>
    <K, V, U extends V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): (target: ReadonlyMap<K, V>) => target is ReadonlyMap<K, U>

    <K, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): (target: Map<K, V>) => boolean
    <K, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): (target: ReadonlyMap<K, V>) => boolean

    <K, V, U extends V>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): target is Map<K, U>
    <K, V, U extends V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): target is ReadonlyMap<K, U>

    <K, V>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): boolean
    <K, V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): boolean
} = dfdlT((<K, V, U extends V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): target is ReadonlyMap<K, U> => {
    for (const [key, value] of target) {
        if (!predicate(value, key, target)) {
            return false
        }
    }
    return true
}) as any, 2)
