import type { UnknownRecord } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { merge } from "./merge"

/**
 * `mapMerge(target, map)`
 *
 * Merges `target` object with the result of calling `map` function on `target`, creating a new object with existing keys updated.
 *
 * ```ts
 * mapMerge({ a: 1, b: 2 }, (obj) => ({ a: obj.a * 2 })); // { a: 2, b: 2 }
 * ```
 *
 * ```ts
 * pipe(
 *     { a: 1, b: 2 },
 *     mapMerge((obj) => ({ a: obj.a * 2 })),
 * ); // { a: 2, b: 2 }
 * ```
 */
export const mapMerge: {
    <T extends UnknownRecord>(map: (target: NoInfer<T>) => Partial<NoInfer<T>>): (target: T) => T
    <T extends UnknownRecord>(target: T, map: (target: NoInfer<T>) => Partial<NoInfer<T>>): T
} = dual(2, <T extends UnknownRecord>(target: T, map: (target: NoInfer<T>) => Partial<NoInfer<T>>): T => {
    return merge(target, map(target))
})
