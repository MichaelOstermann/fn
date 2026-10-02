import type { KeysOfUnion } from "type-fest"
import { dfdlT } from "../dfdl/dfdlT"

/**
 * # keys
 *
 * ```ts
 * function Obj.keys<T extends object>(target: T): KeysOfUnion<T>[]
 * ```
 *
 * Returns an array of `target` object's enumerable property names.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.keys({ a: 1, b: 2, c: 3 }); // ["a", "b", "c"]
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe({ a: 1, b: 2, c: 3 }, Obj.keys()); // ["a", "b", "c"]
 * ```
 *
 */
export const keys: {
    (): <T extends object>(target: T) => KeysOfUnion<T>[]
    <T extends object>(target: T): KeysOfUnion<T>[]
} = dfdlT(<T extends object>(target: T): any => {
    return Object.keys(target)
}, 1)
