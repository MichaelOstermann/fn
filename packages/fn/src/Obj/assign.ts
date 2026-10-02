import type { Merge } from "type-fest"
import { dfdlT } from "../dfdl/dfdlT"
import { merge } from "./merge"

/**
 * # assign
 *
 * ```ts
 * function Obj.assign<T extends object, U extends object>(
 *     target: T,
 *     source: U,
 * ): T extends unknown ? Merge<T, U> : never
 * ```
 *
 * Merges properties from `source` object into `target` object, creating a new object.
 *
 * Looser version of `merge` - `assign` allows you to redefine keys and add new properties.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.assign({ a: 1, b: 2 }, { b: 3, c: 4 }); // { a: 1, b: 3, c: 4 }
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe({ a: 1, b: 2 }, Obj.assign({ b: 3, c: 4 })); // { a: 1, b: 3, c: 4 }
 * ```
 *
 */
export const assign: {
    <T extends object, U extends object>(source: U): (target: T) => T extends unknown ? Merge<T, U> : never
    <T extends object, U extends object>(target: T, source: U): T extends unknown ? Merge<T, U> : never
} = dfdlT((target: any, source: any): any => {
    return merge(target, source)
}, 2)
