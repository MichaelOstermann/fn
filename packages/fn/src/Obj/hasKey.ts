import type { KeysOfUnion, Simplify } from "type-fest"
import { dfdlT } from "../dfdl/dfdlT"

type HasKey<T extends object, U extends KeysOfUnion<T>> = T extends unknown
    ? U extends keyof T
        ? Simplify<T & Record<U, Required<T>[U]>>
        : never
    : never

/**
 * # hasKey
 *
 * ```ts
 * function Obj.hasKey<T extends object, U extends KeysOfUnion<T>>(
 *     target: T,
 *     key: U,
 * ): target is HasKey<T, U>
 * ```
 *
 * Checks if `target` object has the specified `key` property.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.hasKey({ a: 1, b: 2 }, "a"); // true
 * Obj.hasKey({ a: 1, b: 2 }, "c"); // false
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe({ a: 1, b: 2 }, Obj.hasKey("a")); // true
 * pipe({ a: 1, b: 2 }, Obj.hasKey("c")); // false
 * ```
 *
 */
export const hasKey: {
    <T extends object, U extends KeysOfUnion<T>>(key: U): (target: T) => target is HasKey<T, U>
    <T extends object, U extends KeysOfUnion<T>>(target: T, key: U): target is HasKey<T, U>
} = dfdlT(<T extends object, U extends KeysOfUnion<T>>(target: T, key: U): target is HasKey<T, U> => {
    return key in target
}, 2)
