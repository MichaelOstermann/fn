import type { NonNil } from "../internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `getOr(map, key, or)`
 *
 * Gets the value associated with `key` from `map`, returning `or` if the key doesn't exist or the value is nullable.
 *
 * ```ts
 * getOr(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "a",
 *     0,
 * ); // 1
 *
 * getOr(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "b",
 *     0,
 * ); // 0
 *
 * getOr(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "c",
 *     0,
 * ); // 0
 * ```
 *
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     getOr("a", 0),
 * ); // 1
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     getOr("b", 0),
 * ); // 0
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     getOr("c", 0),
 * ); // 0
 * ```
 */
export const getOr: {
    <K, V, U>(key: NoInfer<K>, or: U): (target: ReadonlyMap<K, V>) => NonNil<V> | U
    <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, or: U): NonNil<V> | U
} = dual(3, <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, or: U): any => {
    return target.get(key) ?? or
})
