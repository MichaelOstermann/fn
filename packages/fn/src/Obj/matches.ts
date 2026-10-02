import type { Simplify } from "type-fest"
import { dfdlT } from "../dfdlT"

type Matches<T extends object, U extends T> = T extends unknown
    ? U extends T
        ? Simplify<T & U>
        : never
    : never

/**
 * # matches
 *
 * ```ts
 * function Obj.matches<T extends object, U extends T>(
 *     target: T,
 *     props: Partial<U>,
 * ): target is Matches<T, U>
 * ```
 *
 * Checks if all properties in `props` object have equal values in `target` object.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.matches({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }); // true
 * Obj.matches({ a: 1, b: 2, c: 3 }, { a: 1, b: 3 }); // false
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe({ a: 1, b: 2, c: 3 }, Obj.matches({ a: 1, b: 2 })); // true
 * pipe({ a: 1, b: 2, c: 3 }, Obj.matches({ a: 1, b: 3 })); // false
 * ```
 *
 */
export const matches: {
    <T extends object, U extends T>(props: Partial<U>): (target: T) => target is Matches<T, U>
    <T extends object, U extends T>(target: T, props: Partial<U>): target is Matches<T, U>
} = dfdlT((target: any, props: any): target is any => {
    for (const key in props) {
        if (target[key] !== props[key]) return false
    }
    return true
}, 2)
