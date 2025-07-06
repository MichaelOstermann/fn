import { dfdlT } from "@monstermann/dfdl"

/**
 * `isObject(target)`
 *
 * Checks if `target` is a plain object.
 *
 * ```ts
 * isObject({ a: 1 }); // true
 * isObject([]); // false
 * isObject(null); // false
 * isObject("hello"); // false
 * ```
 *
 * ```ts
 * pipe({ a: 1 }, isObject()); // true
 * pipe([], isObject()); // false
 * pipe(null, isObject()); // false
 * pipe("hello", isObject()); // false
 * ```
 */
export const isObject: {
    (): (target: unknown) => target is Record<PropertyKey, unknown>
    (target: unknown): target is Record<PropertyKey, unknown>
} = dfdlT((target: unknown): target is Record<PropertyKey, unknown> => {
    if (typeof target !== "object" || target === null) return false
    const proto = Object.getPrototypeOf(target)
    return proto === null || proto === Object.prototype
}, 1)
