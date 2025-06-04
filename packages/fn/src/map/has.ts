import { dual } from "@monstermann/dfdl"

/**
 * `has(map, key)`
 *
 * Checks if `map` contains the specified `key`.
 *
 * ```ts
 * has(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 * ); // true
 *
 * has(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 * ); // false
 * ```
 *
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     has("a"),
 * ); // true
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     has("c"),
 * ); // false
 * ```
 */
export const has: {
    <K, V>(key: NoInfer<K>): (target: ReadonlyMap<K, V>) => boolean
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): boolean
} = dual(2, <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): boolean => {
    return target.has(key)
})
