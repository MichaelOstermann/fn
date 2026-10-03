import { dfdlT } from "../dfdlT"

/**
 * # isShallowEqual
 *
 * ```ts
 * function Maps.isShallowEqual<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     source: ReadonlyMap<NoInfer<K>, NoInfer<V>>,
 * ): boolean
 * ```
 *
 * Checks whether two maps are shallowly equal (same keys and values using strict equality).
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.isShallowEqual(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 * ); // true
 *
 * Maps.isShallowEqual(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     new Map([
 *         ["a", 1],
 *         ["b", 3],
 *     ]),
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
 *     Maps.isShallowEqual(
 *         new Map([
 *             ["a", 1],
 *             ["b", 2],
 *         ]),
 *     ),
 * ); // true
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Maps.isShallowEqual(
 *         new Map([
 *             ["a", 1],
 *             ["b", 3],
 *         ]),
 *     ),
 * ); // false
 * ```
 *
 */
export const isShallowEqual: {
    <K, V>(source: ReadonlyMap<NoInfer<K>, NoInfer<V>>): (target: ReadonlyMap<K, V>) => boolean
    <K, V>(target: ReadonlyMap<K, V>, source: ReadonlyMap<NoInfer<K>, NoInfer<V>>): boolean
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, source: ReadonlyMap<NoInfer<K>, NoInfer<V>>): boolean => {
    if (target === source) return true
    if (target.size !== source.size) return false

    // With the same size, every entry of one being in the other is enough.
    for (const [key, value] of target) {
        if (source.get(key) !== value) return false
        if (value === undefined && !source.has(key)) return false
    }

    return true
}, 2)
