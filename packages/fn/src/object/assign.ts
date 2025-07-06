import type { Merge } from "type-fest"
import { dual } from "@monstermann/dfdl"
import { merge } from "./merge"

/**
 * `assign(target, source)`
 *
 * Merges properties from `source` object into `target` object, creating a new object.
 *
 * Looser version of `merge` - `assign` allows you to redefine keys and add new properties.
 *
 * ```ts
 * assign({ a: 1, b: 2 }, { b: 3, c: 4 }); // { a: 1, b: 3, c: 4 }
 * ```
 *
 * ```ts
 * pipe({ a: 1, b: 2 }, assign({ b: 3, c: 4 })); // { a: 1, b: 3, c: 4 }
 * ```
 */
export const assign: {
    <T extends object, U extends object>(source: U): (target: T) => T extends unknown ? Merge<T, U> : never
    <T extends object, U extends object>(target: T, source: U): T extends unknown ? Merge<T, U> : never
} = dual(2, (target: any, source: any): any => {
    return merge(target, source)
})
