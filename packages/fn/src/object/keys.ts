import type { KeysOfUnion } from "type-fest"
import type { UnknownRecord } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `keys(target)`
 *
 * Returns an array of `target` object's enumerable property names.
 *
 * ```ts
 * keys({ a: 1, b: 2, c: 3 }); // ["a", "b", "c"]
 * ```
 *
 * ```ts
 * pipe({ a: 1, b: 2, c: 3 }, keys()); // ["a", "b", "c"]
 * ```
 */
export const keys: {
    (): <T extends UnknownRecord>(target: T) => KeysOfUnion<T>[]
    <T extends UnknownRecord>(target: T): KeysOfUnion<T>[]
} = dual(1, <T extends UnknownRecord>(target: T): any => {
    return Object.keys(target)
})
