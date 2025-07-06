import type { KeysOfUnion, Simplify } from "type-fest"
import { dual } from "@monstermann/dfdl"

type HasProp<T extends object, U extends KeysOfUnion<T>> = T extends unknown
    ? U extends keyof T
        ? Simplify<T & Record<U, Exclude<Required<T>[U], null | undefined>>>
        : never
    : never

/**
 * `hasProp(target, key)`
 *
 * Checks if `target` object has the specified `key` property with a non-null and non-undefined value.
 *
 * ```ts
 * hasProp({ a: 1, b: null }, "a"); // true
 * hasProp({ a: 1, b: null }, "b"); // false
 * ```
 *
 * ```ts
 * pipe({ a: 1, b: null }, hasProp("a")); // true
 * pipe({ a: 1, b: null }, hasProp("b")); // false
 * ```
 */
export const hasProp: {
    <T extends object, U extends KeysOfUnion<T>>(key: U): (target: T) => target is HasProp<T, U>
    <T extends object, U extends KeysOfUnion<T>>(target: T, key: U): target is HasProp<T, U>
} = dual(2, <T extends object, U extends KeysOfUnion<T>>(target: T, key: U): target is HasProp<T, U> => {
    return (target as any)[key] != null
})
