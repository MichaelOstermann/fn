import { dfdlT } from "@monstermann/dfdl"

/**
 * `isString(target)`
 *
 * Checks if `target` is a string.
 *
 * ```ts
 * isString("hello"); // true
 * isString(123); // false
 * isString(null); // false
 * ```
 *
 * ```ts
 * pipe("hello", isString()); // true
 * pipe(123, isString()); // false
 * pipe(null, isString()); // false
 * ```
 */
export const isString: {
    (): (target: unknown) => target is string
    (target: unknown): target is string
} = dfdlT((target: unknown): target is string => {
    return typeof target === "string"
}, 1)
