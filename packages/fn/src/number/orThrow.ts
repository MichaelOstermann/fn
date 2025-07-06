import { dfdlT } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `orThrow(target)`
 *
 * Returns the numeric value of `target` if it's a finite number, otherwise throws an error.
 *
 * ```ts
 * orThrow(42); // 42
 * orThrow(NaN); // throws FnError
 * orThrow(Infinity); // throws FnError
 * orThrow("hello"); // throws FnError
 * ```
 *
 * ```ts
 * pipe(42, orThrow()); // 42
 * pipe(NaN, orThrow()); // throws FnError
 * pipe(Infinity, orThrow()); // throws FnError
 * pipe("hello", orThrow()); // throws FnError
 * ```
 */
export const orThrow: {
    (): <T>(target: T) => Extract<T, number>
    <T>(target: T): Extract<T, number>
} = dfdlT(<T>(target: T): Extract<T, number> => {
    if (Number.isFinite(target)) return target as Extract<T, number>
    throw new FnError("Number.orThrow: Value is not a finite number.", [target])
}, 1)
