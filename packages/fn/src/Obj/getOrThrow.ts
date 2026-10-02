import type { AllUnionFields } from "type-fest"
import { dfdlT } from "../dfdl/dfdlT"

/**
 * # getOrThrow
 *
 * ```ts
 * function Obj.getOrThrow<
 *     T extends object,
 *     U extends keyof AllUnionFields<T>,
 * >(
 *     target: T,
 *     key: U,
 * ): Exclude<AllUnionFields<T>[U], null | undefined>
 * ```
 *
 * Returns the value of `key` property from `target` object, or throws an error if not found or null/undefined.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.getOrThrow({ a: 1, b: 2 }, "a"); // 1
 * Obj.getOrThrow({ a: 1, b: 2 }, "c"); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe({ a: 1, b: 2 }, Obj.getOrThrow("a")); // 1
 * pipe({ a: 1, b: 2 }, Obj.getOrThrow("c")); // throws FnError
 * ```
 *
 */
export const getOrThrow: {
    <T extends object, U extends keyof AllUnionFields<T>>(key: U): (target: T) => Exclude<AllUnionFields<T>[U], null | undefined>
    <T extends object, U extends keyof AllUnionFields<T>>(target: T, key: U): Exclude<AllUnionFields<T>[U], null | undefined>
} = dfdlT((target: any, key: any): any => {
    const value = target[key]
    if (value != null) return value
    throw new Error("Object.getOrThrow: Value not found.")
}, 2)
