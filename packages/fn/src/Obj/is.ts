import { dfdlT } from "../dfdlT"

/**
 * # is
 *
 * ```ts
 * function Obj.is(
 *     target: unknown,
 * ): target is Record<PropertyKey, unknown>
 * ```
 *
 * Checks if `target` is a plain object.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.is({ a: 1 }); // true
 * Obj.is([]); // false
 * Obj.is(null); // false
 * Obj.is("hello"); // false
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe({ a: 1 }, Obj.is()); // true
 * pipe([], Obj.is()); // false
 * pipe(null, Obj.is()); // false
 * pipe("hello", Obj.is()); // false
 * ```
 *
 */
export const is: {
    (): (target: unknown) => target is Record<PropertyKey, unknown>
    (target: unknown): target is Record<PropertyKey, unknown>
} = dfdlT((target: unknown): target is Record<PropertyKey, unknown> => {
    if (typeof target !== "object" || target === null) return false
    const proto = Object.getPrototypeOf(target)
    return proto === null || proto === Object.prototype
}, 1)
