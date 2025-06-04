import type { AllUnionFields, Simplify } from "type-fest"
import type { UnknownRecord } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { is as equals } from "../function/is"

type PropIs<T extends object, U, V> = T extends unknown
    ? U extends keyof T
        ? V extends T[U]
            ? Simplify<T & Record<U, V>>
            : never
        : never
    : never

/**
 * `is(target, key, value)`
 *
 * Checks if the `key` property of `target` object is equal to the specified `value` using strict equality.
 *
 * ```ts
 * is({ a: 1, b: 2 }, "a", 1); // true
 * is({ a: 1, b: 2 }, "a", 2); // false
 * ```
 *
 * ```ts
 * pipe({ a: 1, b: 2 }, is("a", 1)); // true
 * pipe({ a: 1, b: 2 }, is("a", 2)); // false
 * ```
 */
export const is: {
    <T extends UnknownRecord, U extends keyof AllUnionFields<T>, const V extends AllUnionFields<T>[U]>(key: U, value: V): (target: T) => target is PropIs<T, U, V>
    <T extends UnknownRecord, U extends keyof AllUnionFields<T>, const V extends AllUnionFields<T>[U]>(target: T, key: U, value: V): target is PropIs<T, U, V>
} = dual(3, (target: any, key: any, value: any): target is any => {
    return equals(target[key], value)
})
