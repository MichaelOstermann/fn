import { dual } from "@monstermann/dfdl"

/**
 * `isShallowEqual(map, source)`
 *
 * Checks if `map` is shallow equal to `source` by comparing their keys and values using strict equality.
 *
 * ```ts
 * isShallowEqual(
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
 * isShallowEqual(
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
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     isShallowEqual(
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
 *     isShallowEqual(
 *         new Map([
 *             ["a", 1],
 *             ["b", 3],
 *         ]),
 *     ),
 * ); // false
 * ```
 */
export const isShallowEqual: {
    <K, V>(source: ReadonlyMap<NoInfer<K>, NoInfer<V>>): (target: ReadonlyMap<K, V>) => boolean
    <K, V>(target: ReadonlyMap<K, V>, source: ReadonlyMap<NoInfer<K>, NoInfer<V>>): boolean
} = dual(2, <K, V>(target: ReadonlyMap<K, V>, source: ReadonlyMap<NoInfer<K>, NoInfer<V>>): boolean => {
    if (target.size !== source.size) return false
    const seen = new Set()
    for (const k of target.keys()) {
        seen.add(k)
        if (!source.has(k)) return false
        if (target.get(k) !== source.get(k)) return false
    }
    for (const k of source.keys()) {
        if (seen.has(k)) continue
        if (!target.has(k)) return false
        if (target.get(k) !== source.get(k)) return false
    }
    return true
})
