import type { AllUnionFields } from "type-fest"
import type { NonNil } from "../internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `getOr(target, key, or)`
 *
 * Returns the value of `key` property from `target` object, or the `or` value if not found or falsy.
 *
 * ```ts
 * getOr({ a: 1, b: 2 }, "a", 0); // 1
 * getOr({ a: 1, b: 2 }, "c", 0); // 0
 * ```
 *
 * ```ts
 * pipe({ a: 1, b: 2 }, getOr("a", 0)); // 1
 * pipe({ a: 1, b: 2 }, getOr("c", 0)); // 0
 * ```
 */
export const getOr: {
    <T extends object, U extends keyof AllUnionFields<T>, V>(key: U, or: V): (target: T) => NonNil<AllUnionFields<T>[U] | V>
    <T extends object, U extends keyof AllUnionFields<T>, V>(target: T, key: U, or: V): NonNil<AllUnionFields<T>[U] | V>
} = dual(3, (target: any, key: any, or: any): any => {
    return target[key] || or
})
