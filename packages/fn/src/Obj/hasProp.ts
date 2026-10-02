import type { KeysOfUnion, Simplify } from "type-fest"
import { dfdlT } from "../dfdlT"

type HasProp<T extends object, U extends KeysOfUnion<T>> = T extends unknown
    ? U extends keyof T
        ? Simplify<T & Record<U, Exclude<Required<T>[U], null | undefined>>>
        : never
    : never

/**
 * # hasProp
 *
 * ```ts
 * function Obj.hasProp<
 *     T extends object,
 *     U extends KeysOfUnion<T>,
 * >(target: T, key: U): target is HasProp<T, U>
 * ```
 *
 * Checks if `target` object has the specified `key` property with a non-null and non-undefined value.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.hasProp({ a: 1, b: null }, "a"); // true
 * Obj.hasProp({ a: 1, b: null }, "b"); // false
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe({ a: 1, b: null }, Obj.hasProp("a")); // true
 * pipe({ a: 1, b: null }, Obj.hasProp("b")); // false
 * ```
 *
 */
export const hasProp: {
    <T extends object, U extends KeysOfUnion<T>>(key: U): (target: T) => target is HasProp<T, U>
    <T extends object, U extends KeysOfUnion<T>>(target: T, key: U): target is HasProp<T, U>
} = dfdlT(<T extends object, U extends KeysOfUnion<T>>(target: T, key: U): target is HasProp<T, U> => {
    return (target as any)[key] != null
}, 2)
