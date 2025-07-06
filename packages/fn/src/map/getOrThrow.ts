import type { NonNil } from "../internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `getOrThrow(map, key)`
 *
 * Gets the value associated with `key` from `map`, throwing an error if the key doesn't exist or the value is nullable.
 *
 * ```ts
 * getOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 * ); // 1
 *
 * getOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "b",
 * ); // throws FnError
 *
 * getOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 * ); // throws FnError
 * ```
 *
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     getOrThrow("a"),
 * ); // 1
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     getOrThrow("b"),
 * ); // throws FnError
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     getOrThrow("c"),
 * ); // throws FnError
 * ```
 */
export const getOrThrow: {
    <K, V>(key: NoInfer<K>): (target: ReadonlyMap<K, V>) => NonNil<V>
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): NonNil<V>
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): any => {
    const value = target.get(key)
    if (value != null) return value
    throw new FnError(`Map.getOrThrow: Value not found.`, [target, key])
}, 2)
