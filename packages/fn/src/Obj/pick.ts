import type { DistributedPick, KeysOfUnion } from "type-fest"
import { dfdlT } from "../dfdl/dfdlT"
import { markAsMutable } from "../remmi/markAsMutable"

/**
 * # pick
 *
 * ```ts
 * function Obj.pick<T extends object, K extends KeysOfUnion<T>>(
 *     target: T,
 *     keys: Iterable<K>,
 * ): DistributedPick<T, K>
 * ```
 *
 * Creates a new object containing only the properties specified in the `keys` iterable.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.pick({ a: 1, b: 2, c: 3 }, ["a", "c"]); // { a: 1, c: 3 }
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe({ a: 1, b: 2, c: 3 }, Obj.pick(["a", "c"])); // { a: 1, c: 3 }
 * ```
 *
 */
export const pick: {
    <T extends object, K extends KeysOfUnion<T>>(keys: Iterable<K>): (target: T) => DistributedPick<T, K>
    <T extends object, K extends KeysOfUnion<T>>(target: T, keys: Iterable<K>): DistributedPick<T, K>
} = dfdlT((target: any, keys: any): any => {
    const result: any = {}
    for (const key of keys)
        result[key] = target[key]
    return markAsMutable(result)
}, 2)
