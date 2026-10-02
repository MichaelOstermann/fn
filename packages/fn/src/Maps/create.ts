/**
 * # create
 *
 * ```ts
 * function Maps.create<K, V>(
 *     iterable?: Iterable<readonly [K, V]> | null | undefined,
 * ): Map<K, V>
 * ```
 *
 * Creates a new Map from an iterable of key-value pairs.
 *
 * ## Example
 *
 * ```ts
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.create([
 *     ["a", 1],
 *     ["b", 2],
 *     ["c", 3],
 * ]); // Map(2) { "a" => 1, "b" => 2, "c" => 3 }
 * ```
 *
 */
export function create<K, V>(iterable?: Iterable<readonly [K, V]> | null | undefined): Map<K, V> {
    return new globalThis.Map(iterable)
}
