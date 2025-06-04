import type { Simplify } from "type-fest"
import type { UnknownRecord } from "./internals/types"
import { dual } from "@monstermann/dfdl"

type Matches<T extends object, U extends T> = T extends unknown
    ? U extends T
        ? Simplify<T & U>
        : never
    : never

/**
 * `matches(target, props)`
 *
 * Checks if all properties in `props` object have equal values in `target` object.
 *
 * ```ts
 * matches({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }); // true
 * matches({ a: 1, b: 2, c: 3 }, { a: 1, b: 3 }); // false
 * ```
 *
 * ```ts
 * pipe({ a: 1, b: 2, c: 3 }, matches({ a: 1, b: 2 })); // true
 * pipe({ a: 1, b: 2, c: 3 }, matches({ a: 1, b: 3 })); // false
 * ```
 */
export const matches: {
    <T extends UnknownRecord, U extends T>(props: Partial<U>): (target: T) => target is Matches<T, U>
    <T extends UnknownRecord, U extends T>(target: T, props: Partial<U>): target is Matches<T, U>
} = dual(2, (target: any, props: any): target is any => {
    for (const key in props) {
        if (target[key] !== props[key]) return false
    }
    return true
})
