import type { Merge } from "type-fest"
import { dual } from "@monstermann/dfdl"
import { merge } from "./merge"

/**
 * `mapAssign(target, map)`
 *
 * Merges `target` object with the result of calling `map` function on `target`, creating a new object.
 *
 * Looser version of `mapMerge` - `mapAssign` allows you to redefine keys and add new properties.
 *
 * ```ts
 * mapAssign({ a: 1, b: 2 }, (obj) => ({ c: obj.a + obj.b })); // { a: 1, b: 2, c: 3 }
 * ```
 *
 * ```ts
 * pipe(
 *     { a: 1, b: 2 },
 *     mapAssign((obj) => ({ c: obj.a + obj.b })),
 * ); // { a: 1, b: 2, c: 3 }
 * ```
 */
export const mapAssign: {
    <T extends object, U extends object>(map: (target: NoInfer<T>) => U): (target: T) => T extends unknown ? Merge<T, U> : never
    <T extends object, U extends object>(target: T, map: (target: NoInfer<T>) => U): T extends unknown ? Merge<T, U> : never
} = dual(2, (target: any, map: any): any => {
    return merge(target, map(target))
})
