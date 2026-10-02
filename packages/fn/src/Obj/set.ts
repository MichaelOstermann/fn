import { cloneObject } from "../cloneObject"
import { dfdlT } from "../dfdlT"

/**
 * # set
 *
 * ```ts
 * function Obj.set<T extends object, K extends keyof T>(
 *     target: T,
 *     key: K,
 *     value: T[K],
 * ): T
 * ```
 *
 * Creates a new object with the `key` property set to `value`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.set({ a: 1, b: 2 }, "a", 3); // { a: 3, b: 2 }
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe({ a: 1, b: 2 }, Obj.set("a", 3)); // { a: 3, b: 2 }
 * ```
 *
 */
export const set: {
    <T extends object, K extends keyof T>(key: K, value: T[K]): (target: T) => T
    <T extends object, K extends keyof T>(target: T, key: K, value: T[K]): T
} = dfdlT((target: any, key: any, value: any): any => {
    if (target[key] === value) return target
    target = cloneObject(target)
    target[key] = value
    return target
}, 3)
