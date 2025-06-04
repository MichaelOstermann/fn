import type { UnionToIntersection } from "type-fest"
import type { UnknownRecord } from "./internals/types"
import { dual } from "@monstermann/dfdl"

type ForEachCallback<T extends object> = T extends unknown
    ? UnionToIntersection<{
        [K in keyof T]: (prop: [key: K, value: T[K]], target: T) => unknown
    }[keyof T]>
    : never

/**
 * `forEach(target, fn)`
 *
 * Executes `fn` function for each key-value pair in `target` object and returns the original object.
 *
 * ```ts
 * forEach({ a: 1, b: 2 }, ([key, value]) => console.log(key, value)); // { a: 1, b: 2 }
 * ```
 *
 * ```ts
 * pipe(
 *     { a: 1, b: 2 },
 *     forEach(([key, value]) => console.log(key, value)),
 * ); // { a: 1, b: 2 }
 * ```
 */
export const forEach: {
    <T extends UnknownRecord>(fn: ForEachCallback<T>): (target: T) => T
    <T extends UnknownRecord>(target: T, fn: ForEachCallback<T>): T
} = dual(2, <T extends UnknownRecord>(target: T, fn: ForEachCallback<T>): T => {
    for (const key of Object.keys(target)) {
        fn([key, target[key]], target)
    }
    return target
})
