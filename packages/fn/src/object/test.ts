import type { AllUnionFields, Simplify } from "type-fest"
import { dual } from "@monstermann/dfdl"

type Test<T extends object, U, V> = T extends unknown
    ? U extends keyof T
        ? V extends T[U]
            ? Simplify<T & Record<U, V>>
            : never
        : never
    : never

/**
 * `test(target, key, predicate)`
 *
 * Checks if the `key` property of `target` object passes the `predicate` function test.
 *
 * ```ts
 * test({ a: 5, b: 2 }, "a", (x) => x > 3); // true
 * test({ a: 1, b: 2 }, "a", (x) => x > 3); // false
 * ```
 *
 * ```ts
 * pipe(
 *     { a: 5, b: 2 },
 *     test("a", (x) => x > 3),
 * ); // true
 *
 * pipe(
 *     { a: 1, b: 2 },
 *     test("a", (x) => x > 3),
 * ); // false
 * ```
 */
export const test: {
    <T extends object, U extends keyof AllUnionFields<T>, V extends AllUnionFields<T>[U]>(
        key: U,
        predicate: (value: AllUnionFields<T>[U]) => value is V
    ): (target: T) => target is Test<T, U, V>

    <T extends object, U extends keyof AllUnionFields<T>>(
        key: U,
        predicate: (value: AllUnionFields<T>[U]) => boolean
    ): (target: T) => target is Test<T, U, AllUnionFields<T>[U]>

    <T extends object, U extends keyof AllUnionFields<T>, V extends AllUnionFields<T>[U]>(
        target: T,
        key: U,
        predicate: (value: AllUnionFields<T>[U]) => value is V
    ): target is Test<T, U, V>

    <T extends object, U extends keyof AllUnionFields<T>>(
        target: T,
        key: U,
        predicate: (value: AllUnionFields<T>[U]) => boolean
    ): target is Test<T, U, AllUnionFields<T>[U]>
} = dual(3, (target: any, key: any, predicate: any): target is any => {
    return predicate(target[key])
})
