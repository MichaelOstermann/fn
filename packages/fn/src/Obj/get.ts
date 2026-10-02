import type { AllUnionFields } from "type-fest"
import { dfdlT } from "../dfdl/dfdlT"

/**
 * # get
 *
 * ```ts
 * function Obj.get<
 *     T extends object,
 *     U extends keyof AllUnionFields<T>,
 * >(target: T, key: U): AllUnionFields<T>[U]
 * ```
 *
 * Returns the value of `key` property from `target` object, or undefined if not found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.get({ a: 1, b: 2 }, "a"); // 1
 * Obj.get({ a: 1, b: 2 }, "c"); // undefined
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe({ a: 1, b: 2 }, Obj.get("a")); // 1
 * pipe({ a: 1, b: 2 }, Obj.get("c")); // undefined
 * ```
 *
 */
export const get: {
    <T extends object, U extends keyof AllUnionFields<T>>(key: U): (target: T) => AllUnionFields<T>[U]
    <T extends object, U extends keyof AllUnionFields<T>>(target: T, key: U): AllUnionFields<T>[U]
} = dfdlT((target: any, key: any): any => {
    return target[key]
}, 2)
