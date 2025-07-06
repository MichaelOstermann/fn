import { dfdlT } from "@monstermann/dfdl"
import { cloneObject } from "@monstermann/remmi"
import { is } from "../function/is"

/**
 * `map(target, key, transform)`
 *
 * Creates a new object with the `key` property transformed by the `transform` function.
 *
 * ```ts
 * map({ a: 1, b: 2 }, "a", (x) => x * 2); // { a: 2, b: 2 }
 * ```
 *
 * ```ts
 * pipe(
 *     { a: 1, b: 2 },
 *     map("a", (x) => x * 2),
 * ); // { a: 2, b: 2 }
 * ```
 */
export const map: {
    <T extends object, U extends keyof T>(key: U, transform: (value: NoInfer<T>[U]) => T[U]): (target: T) => T
    <T extends object, U extends keyof T>(target: T, key: U, transform: (value: NoInfer<T>[U]) => T[U]): T
} = dfdlT(<T extends object, U extends keyof T>(target: T, key: U, transform: (value: NoInfer<T>[U]) => T[U]): T => {
    const prev = target[key]
    const next = transform(prev)
    if (is(prev, next)) return target
    const result = cloneObject(target)
    result[key] = next
    return result
}, 3)
