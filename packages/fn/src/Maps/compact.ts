import { dfdlT } from "../dfdl/dfdlT"
import { filter } from "./filter"

/**
 * # compact
 *
 * ```ts
 * function Maps.compact<K, V>(
 *     target: ReadonlyMap<K, V>,
 * ): ReadonlyMap<K, Exclude<V, null | undefined>>
 * ```
 *
 * Removes all entries with `null` or `undefined` values.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.compact(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *         ["c", undefined],
 *     ]),
 * ); // Map(1) { "a" => 1 }
 * ```
 *
 * ```ts [data-last]
 * import { Maps } from "@monstermann/fn";
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *         ["c", undefined],
 *     ]),
 *     Maps.compact(),
 * ); // Map(1) { "a" => 1 }
 * ```
 *
 */
export const compact: {
    (): <K, V>(target: Map<K, V>) => Map<K, Exclude<V, null | undefined>>
    (): <K, V>(target: ReadonlyMap<K, V>) => ReadonlyMap<K, Exclude<V, null | undefined>>

    <K, V>(target: Map<K, V>): Map<K, Exclude<V, null | undefined>>
    <K, V>(target: ReadonlyMap<K, V>): ReadonlyMap<K, Exclude<V, null | undefined>>
} = dfdlT((target: any): any => {
    return filter(target, v => v != null)
}, 1)
