import type { AllUnionFields } from "type-fest"
import { dfdlT } from "../dfdlT"

/**
 * # getOr
 *
 * ```ts
 * function Obj.getOr<
 *     T extends object,
 *     U extends keyof AllUnionFields<T>,
 *     V,
 * >(
 *     target: T,
 *     key: U,
 *     or: V,
 * ): Exclude<AllUnionFields<T>[U] | V, null | undefined>
 * ```
 *
 * Returns the value of `key` property from `target` object, or the `or` value if not found or nullish.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.getOr({ a: 1, b: 2 }, "a", 0); // 1
 * Obj.getOr({ a: 1, b: 2 }, "c", 0); // 0
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe({ a: 1, b: 2 }, Obj.getOr("a", 0)); // 1
 * pipe({ a: 1, b: 2 }, Obj.getOr("c", 0)); // 0
 * ```
 *
 */
export const getOr: {
    <T extends object, U extends keyof AllUnionFields<T>, V>(key: U, or: V): (target: T) => Exclude<AllUnionFields<T>[U] | V, null | undefined>
    <T extends object, U extends keyof AllUnionFields<T>, V>(target: T, key: U, or: V): Exclude<AllUnionFields<T>[U] | V, null | undefined>
} = dfdlT((target: any, key: any, or: any): any => {
    return target[key] ?? or
}, 3)
