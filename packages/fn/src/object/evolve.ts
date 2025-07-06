import type { UnknownArray } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"
import { cloneObject } from "@monstermann/remmi"
import { is } from "../function/is"

type Evolver<T> = T extends object
    ? T extends UnknownArray
        ? never
        : {
                readonly [K in keyof T]?: K extends symbol
                    ? never
                    : Evolver<T[K]> | ((data: Required<T>[K]) => T[K]);
            }
    : never

/**
 * `evolve(target, props)`
 *
 * Creates a new object with multiple properties transformed by their corresponding functions in the `props` object.
 *
 * ```ts
 * evolve(
 *     { a: 1, b: 2, c: 3 },
 *     {
 *         a: (x) => x * 2,
 *         c: (x) => x + 1,
 *     },
 * ); // { a: 2, b: 2, c: 4 }
 * ```
 *
 * ```ts
 * pipe(
 *     { a: 1, b: 2, c: 3 },
 *     evolve({
 *         a: (x) => x * 2,
 *         c: (x) => x + 1,
 *     }),
 * ); // { a: 2, b: 2, c: 4 }
 * ```
 */
export const evolve: {
    <T extends object, U extends Evolver<T>>(evolver: U): (target: T) => T
    <T extends object, U extends Evolver<T>>(target: T, evolver: U): T
} = dfdlT((target: any, evolver: any): any => {
    let result
    for (const key in evolver) {
        const value = evolver[key]
        const prev = target[key]
        const next = typeof value === "function"
            ? value(prev)
            : evolve(prev, value)
        if (is(prev, next)) continue
        result ??= cloneObject(target)
        result[key] = next
    }
    return result ?? target
}, 2)
