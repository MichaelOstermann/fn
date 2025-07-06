import { dfdlT } from "@monstermann/dfdl"

/**
 * `isError(target)`
 *
 * Checks if a value is an Error instance.
 *
 * ```ts
 * isError(new Error("test")); // true
 * isError("error message"); // false
 * ```
 *
 * ```ts
 * pipe(new Error("test"), isError()); // true
 * pipe("error message", isError()); // false
 * ```
 */
export const isError: {
    (): (target: unknown) => target is Error
    (target: unknown): target is Error
} = dfdlT((target: unknown): target is Error => {
    return target instanceof Error
}, 1)
