import type { UnionToIntersection } from "type-fest"
import { dfdlT } from "../dfdl/dfdlT"

type ForEachCallback<T extends object> = T extends unknown
    ? UnionToIntersection<{
        [K in keyof T]: (prop: [key: K, value: T[K]], target: T) => unknown
    }[keyof T]>
    : never

/**
 * # forEach
 *
 * ```ts
 * function Obj.forEach<T extends object>(
 *     target: T,
 *     fn: ForEachCallback<T>,
 * ): T
 * ```
 *
 * Executes `fn` function for each key-value pair in `target` object and returns the original object.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.forEach({ a: 1, b: 2 }, ([key, value]) => console.log(key, value)); // { a: 1, b: 2 }
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe(
 *     { a: 1, b: 2 },
 *     Obj.forEach(([key, value]) => console.log(key, value)),
 * ); // { a: 1, b: 2 }
 * ```
 *
 */
export const forEach: {
    <T extends object>(fn: ForEachCallback<T>): (target: T) => T
    <T extends object>(target: T, fn: ForEachCallback<T>): T
} = dfdlT(<T extends object>(target: T, fn: ForEachCallback<T>): T => {
    for (const key of Object.keys(target) as (keyof T)[]) {
        fn([key, target[key]], target)
    }
    return target
}, 2)
