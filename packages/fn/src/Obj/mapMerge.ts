import { dfdlT } from "../dfdl/dfdlT"
import { merge } from "./merge"

/**
 * # mapMerge
 *
 * ```ts
 * function Obj.mapMerge<T extends object>(
 *     target: T,
 *     map: (target: NoInfer<T>) => Partial<NoInfer<T>>,
 * ): T
 * ```
 *
 * Merges `target` object with the result of calling `map` function on `target`, creating a new object with existing keys updated.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.mapMerge({ a: 1, b: 2 }, (obj) => ({ a: obj.a * 2 })); // { a: 2, b: 2 }
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe(
 *     { a: 1, b: 2 },
 *     Obj.mapMerge((obj) => ({ a: obj.a * 2 })),
 * ); // { a: 2, b: 2 }
 * ```
 *
 */
export const mapMerge: {
    <T extends object>(map: (target: NoInfer<T>) => Partial<NoInfer<T>>): (target: T) => T
    <T extends object>(target: T, map: (target: NoInfer<T>) => Partial<NoInfer<T>>): T
} = dfdlT(<T extends object>(target: T, map: (target: NoInfer<T>) => Partial<NoInfer<T>>): T => {
    return merge(target, map(target))
}, 2)
