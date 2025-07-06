import { dfdlT } from "@monstermann/dfdl"

/**
 * `isBoolean(target)`
 *
 * Checks if a value is a boolean.
 *
 * ```ts
 * isBoolean(true); // true
 * isBoolean("true"); // false
 * ```
 *
 * ```ts
 * pipe(true, isBoolean()); // true
 * pipe("true", isBoolean()); // false
 * ```
 */
export const isBoolean: {
    (): (target: unknown) => target is boolean
    (target: unknown): target is boolean
} = dfdlT((target: unknown): target is boolean => {
    return typeof target === "boolean"
}, 1)
