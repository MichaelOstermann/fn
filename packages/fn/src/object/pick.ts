import type { DistributedPick, KeysOfUnion } from "type-fest"
import type { UnknownRecord } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { markAsMutable } from "@monstermann/remmi"

/**
 * `pick(target, keys)`
 *
 * Creates a new object containing only the properties specified in the `keys` iterable.
 *
 * ```ts
 * pick({ a: 1, b: 2, c: 3 }, ["a", "c"]); // { a: 1, c: 3 }
 * ```
 *
 * ```ts
 * pipe({ a: 1, b: 2, c: 3 }, pick(["a", "c"])); // { a: 1, c: 3 }
 * ```
 */
export const pick: {
    <T extends UnknownRecord, K extends KeysOfUnion<T>>(keys: Iterable<K>): (target: T) => DistributedPick<T, K>
    <T extends UnknownRecord, K extends KeysOfUnion<T>>(target: T, keys: Iterable<K>): DistributedPick<T, K>
} = dual(2, (target: any, keys: any): any => {
    const result: any = {}
    for (const key of keys)
        result[key] = target[key]
    return markAsMutable(result)
})
