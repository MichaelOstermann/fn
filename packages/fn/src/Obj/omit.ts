import type { DistributedOmit, KeysOfUnion } from "type-fest"
import { dfdlT } from "../dfdlT"
import { markAsMutable } from "../markAsMutable"

/**
 * # omit
 *
 * ```ts
 * function Obj.omit<T extends object, K extends KeysOfUnion<T>>(
 *     target: T,
 *     keys: Iterable<K>,
 * ): DistributedOmit<T, K>
 * ```
 *
 * Creates a new object excluding the properties specified in the `keys` iterable.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.omit({ a: 1, b: 2, c: 3 }, ["a", "c"]); // { b: 2 }
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe({ a: 1, b: 2, c: 3 }, Obj.omit(["a", "c"])); // { b: 2 }
 * ```
 *
 */
export const omit: {
    <T extends object, K extends KeysOfUnion<T>>(keys: Iterable<K>): (target: T) => DistributedOmit<T, K>
    <T extends object, K extends KeysOfUnion<T>>(target: T, keys: Iterable<K>): DistributedOmit<T, K>
} = dfdlT((target: any, keys: any): any => {
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
}, 2)
