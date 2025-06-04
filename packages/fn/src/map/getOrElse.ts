import type { NonNil } from "../internals/types"
import type { OrElse } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `getOrElse(map, key, orElse)`
 *
 * Gets the value associated with `key` from `map`, calling `orElse` with the map if the key doesn't exist or the value is nullable.
 *
 * ```ts
 * getOrElse(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "a",
 *     () => 0,
 * ); // 1
 *
 * getOrElse(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "b",
 *     () => 0,
 * ); // 0
 *
 * getOrElse(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "c",
 *     (map) => map.size,
 * ); // 2
 * ```
 *
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     getOrElse("a", () => 0),
 * ); // 1
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     getOrElse("b", () => 0),
 * ); // 0
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     getOrElse("c", (map) => map.size),
 * ); // 2
 * ```
 */
export const getOrElse: {
    <K, V, U>(key: NoInfer<K>, orElse: OrElse<K, V, U>): (target: ReadonlyMap<K, V>) => NonNil<V> | U
    <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, orElse: OrElse<K, V, U>): NonNil<V> | U
} = dual(3, <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, orElse: OrElse<K, V, U>): any => {
    return target.get(key) ?? orElse(target)
})
