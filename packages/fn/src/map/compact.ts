import type { NonNil } from "../internals/types"
import { dual } from "@monstermann/dfdl"
import { filter } from "./filter"

/**
 * `compact(map)`
 *
 * Removes all nullable values from `map`.
 *
 * ```ts
 * compact(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *         ["c", undefined],
 *     ]),
 * ); // Map(1) { "a" => 1 }
 * ```
 *
 * ```ts
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *         ["c", undefined],
 *     ]),
 *     compact(),
 * ); // Map(1) { "a" => 1 }
 * ```
 */
export const compact: {
    (): <K, V>(target: Map<K, V>) => Map<K, NonNil<V>>
    (): <K, V>(target: ReadonlyMap<K, V>) => ReadonlyMap<K, NonNil<V>>

    <K, V>(target: Map<K, V>): Map<K, NonNil<V>>
    <K, V>(target: ReadonlyMap<K, V>): ReadonlyMap<K, NonNil<V>>
} = dual(1, (target: any): any => {
    return filter(target, v => v != null)
})
