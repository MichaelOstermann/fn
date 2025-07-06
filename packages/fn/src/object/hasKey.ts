import type { KeysOfUnion, Simplify } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"

type HasKey<T extends object, U extends KeysOfUnion<T>> = T extends unknown
    ? U extends keyof T
        ? Simplify<T & Record<U, Required<T>[U]>>
        : never
    : never

/**
 * `hasKey(target, key)`
 *
 * Checks if `target` object has the specified `key` property.
 *
 * ```ts
 * hasKey({ a: 1, b: 2 }, "a"); // true
 * hasKey({ a: 1, b: 2 }, "c"); // false
 * ```
 *
 * ```ts
 * pipe({ a: 1, b: 2 }, hasKey("a")); // true
 * pipe({ a: 1, b: 2 }, hasKey("c")); // false
 * ```
 */
export const hasKey: {
    <T extends object, U extends KeysOfUnion<T>>(key: U): (target: T) => target is HasKey<T, U>
    <T extends object, U extends KeysOfUnion<T>>(target: T, key: U): target is HasKey<T, U>
} = dfdlT(<T extends object, U extends KeysOfUnion<T>>(target: T, key: U): target is HasKey<T, U> => {
    return key in target
}, 2)
