/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { dfdlT } from "@monstermann/dfdl"

/**
 * `isFunction(target)`
 *
 * Checks if a value is a function.
 *
 * ```ts
 * isFunction(() => {}); // true
 * isFunction("not a function"); // false
 * ```
 *
 * ```ts
 * pipe(() => {}, isFunction()); // true
 * pipe("not a function", isFunction()); // false
 * ```
 */
export const isFunction: {
    (): (target: unknown) => target is Function
    (target: unknown): target is Function
} = dfdlT((target: unknown): target is Function => {
    return typeof target === "function"
}, 1)
