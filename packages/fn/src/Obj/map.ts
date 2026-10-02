import { cloneObject } from "../cloneObject"
import { dfdlT } from "../dfdlT"

/**
 * # map
 *
 * ```ts
 * function Obj.map<T extends object, U extends keyof T>(
 *     target: T,
 *     key: U,
 *     transform: (value: NoInfer<T>[U]) => T[U],
 * ): T
 * ```
 *
 * ```ts [Full]
 * function Obj.map<T extends object, U extends keyof T>(
 *     target: T,
 *     key: U,
 *     transform: (value: NoInfer<T>[U]) => T[U],
 * ): T
 * ```
 *
 * Creates a new object with the `key` property transformed by the `transform` function.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.map({ a: 1, b: 2 }, "a", (x) => x * 2); // { a: 2, b: 2 }
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe(
 *     { a: 1, b: 2 },
 *     Obj.map("a", (x) => x * 2),
 * ); // { a: 2, b: 2 }
 * ```
 *
 */
export const map: {
    <T extends object, U extends keyof T>(key: U, transform: (value: NoInfer<T>[U]) => T[U]): (target: T) => T
    <T extends object, U extends keyof T>(target: T, key: U, transform: (value: NoInfer<T>[U]) => T[U]): T
} = dfdlT(<T extends object, U extends keyof T>(target: T, key: U, transform: (value: NoInfer<T>[U]) => T[U]): T => {
    const prev = target[key]
    const next = transform(prev)
    if (prev === next) return target
    const result = cloneObject(target)
    result[key] = next
    return result
}, 3)
