import { dfdlT } from "@monstermann/dfdl"
import { cloneObject } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `set(target, key, value)`
 *
 * Creates a new object with the `key` property set to `value`.
 *
 * ```ts
 * set({ a: 1, b: 2 }, "a", 3); // { a: 3, b: 2 }
 * ```
 *
 * ```ts
 * pipe({ a: 1, b: 2 }, set("a", 3)); // { a: 3, b: 2 }
 * ```
 */
export const set: {
    <T extends object, K extends keyof T>(key: K, value: T[K]): (target: T) => T
    <T extends object, K extends keyof T>(target: T, key: K, value: T[K]): T
} = dfdlT((target: any, key: any, value: any): any => {
    if (is(target[key], value)) return target
    target = cloneObject(target)
    target[key] = value
    return target
}, 3)
