import { dfdlT } from "../dfdl/dfdlT"

/**
 * # is
 *
 * ```ts
 * function Str.is(target: unknown): target is string
 * ```
 *
 * Checks if `target` is a string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.is("hello"); // true
 * Str.is(123); // false
 * Str.is(null); // false
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello", Str.is()); // true
 * pipe(123, Str.is()); // false
 * pipe(null, Str.is()); // false
 * ```
 *
 */
export const is: {
    (): (target: unknown) => target is string
    (target: unknown): target is string
} = dfdlT((target: unknown): target is string => {
    return typeof target === "string"
}, 1)
