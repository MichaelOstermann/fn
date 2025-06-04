import type { UnknownRecord } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `isShallowEqual(target, source)`
 *
 * Performs a shallow equality comparison between `target` and `source` objects.
 *
 * ```ts
 * isShallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
 * isShallowEqual({ a: 1, b: 2 }, { a: 1, b: 3 }); // false
 * ```
 *
 * ```ts
 * pipe({ a: 1, b: 2 }, isShallowEqual({ a: 1, b: 2 })); // true
 * pipe({ a: 1, b: 2 }, isShallowEqual({ a: 1, b: 3 })); // false
 * ```
 */
export const isShallowEqual: {
    <T extends UnknownRecord, U extends T>(source: U): (target: T) => target is U
    <T extends UnknownRecord, U extends T>(target: T, source: U): target is U
} = dual(2, <T extends UnknownRecord, U extends T>(a: T, b: U): a is U => {
    if (a === b || Object.is(a, b)) return true

    const keys = Object.keys(a)
    if (keys.length !== Object.keys(b).length) {
        return false
    }

    for (const key of keys) {
        if (!Object.hasOwn(b, key)) {
            return false
        }

        const { [key as keyof T]: valueA } = a
        const { [key as keyof T]: valueB } = b

        if (valueA !== valueB || !Object.is(valueA, valueB)) {
            return false
        }
    }

    return true
})
