import type { Simplify } from "type-fest"
import type { UnknownRecord } from "./internals/types"
import { dual } from "@monstermann/dfdl"

type TestAllPredicates<T extends object> = Partial<{
    [K in keyof T]: (value: T[K], key: K, target: Readonly<T>) => boolean
}>

type TestAllResult<T extends object, U> = Simplify<T & {
    [K in Extract<keyof U, keyof T>]: U[K] extends (value: any, key: any, target: any) => value is infer V
        ? V
        : T[K]
}>

/**
 * `testAll(target, props)`
 *
 * Checks if all properties in `target` object pass their corresponding predicate functions in `props` object.
 *
 * ```ts
 * testAll({ a: 5, b: 2 }, { a: (x) => x > 3, b: (x) => x > 0 }); // true
 * testAll({ a: 1, b: 2 }, { a: (x) => x > 3, b: (x) => x > 0 }); // false
 * ```
 *
 * ```ts
 * pipe({ a: 5, b: 2 }, testAll({ a: (x) => x > 3, b: (x) => x > 0 })); // true
 * pipe({ a: 1, b: 2 }, testAll({ a: (x) => x > 3, b: (x) => x > 0 })); // false
 * ```
 */
export const testAll: {
    <T extends UnknownRecord, U extends TestAllPredicates<T>>(props: U): (target: T) => target is TestAllResult<T, U>
    <T extends UnknownRecord, U extends TestAllPredicates<T>>(target: T, props: U): target is TestAllResult<T, U>
} = dual(2, (target: any, props: any): target is any => {
    for (const key in props) {
        if (!props[key](target[key], key, target)) return false
    }
    return true
})
