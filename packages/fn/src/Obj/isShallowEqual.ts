import { dfdlT } from "../dfdl/dfdlT"

/**
 * # isShallowEqual
 *
 * ```ts
 * function Obj.isShallowEqual<T extends object, U extends T>(
 *     target: T,
 *     source: U,
 * ): target is U
 * ```
 *
 * Performs a shallow equality comparison between `target` and `source` objects.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.isShallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
 * Obj.isShallowEqual({ a: 1, b: 2 }, { a: 1, b: 3 }); // false
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe({ a: 1, b: 2 }, Obj.isShallowEqual({ a: 1, b: 2 })); // true
 * pipe({ a: 1, b: 2 }, Obj.isShallowEqual({ a: 1, b: 3 })); // false
 * ```
 *
 */
export const isShallowEqual: {
    <T extends object, U extends T>(source: U): (target: T) => target is U
    <T extends object, U extends T>(target: T, source: U): target is U
} = dfdlT(<T extends object, U extends T>(a: T, b: U): a is U => {
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
}, 2)
