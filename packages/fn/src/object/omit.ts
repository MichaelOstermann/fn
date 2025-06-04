import type { DistributedOmit, KeysOfUnion } from "type-fest"
import type { UnknownRecord } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { markAsMutable } from "@monstermann/remmi"

/**
 * `omit(target, keys)`
 *
 * Creates a new object excluding the properties specified in the `keys` iterable.
 *
 * ```ts
 * omit({ a: 1, b: 2, c: 3 }, ["a", "c"]); // { b: 2 }
 * ```
 *
 * ```ts
 * pipe({ a: 1, b: 2, c: 3 }, omit(["a", "c"])); // { b: 2 }
 * ```
 */
export const omit: {
    <T extends UnknownRecord, K extends KeysOfUnion<T>>(keys: Iterable<K>): (target: T) => DistributedOmit<T, K>
    <T extends UnknownRecord, K extends KeysOfUnion<T>>(target: T, keys: Iterable<K>): DistributedOmit<T, K>
} = dual(2, (target: any, keys: any): any => {
    for (const key of keys) {
        if (key in target) {
            const result = {} as any
            for (const k in target) {
                if (!keys.includes(k)) {
                    result[k] = target[k]
                }
            }
            return markAsMutable(result)
        }
    }
    return target
})
