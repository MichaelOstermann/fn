import { dfdlT } from "@monstermann/dfdl"

/**
 * `isNumber(target)`
 *
 * Returns `true` if `target` is a number, otherwise `false`. This function acts as a type guard.
 *
 * ```ts
 * isNumber(42); // true
 * isNumber(3.14); // true
 * isNumber(NaN); // true
 * isNumber(Infinity); // true
 * isNumber("123"); // false
 * isNumber(null); // false
 * ```
 *
 * ```ts
 * pipe(42, isNumber()); // true
 * pipe(3.14, isNumber()); // true
 * pipe(NaN, isNumber()); // true
 * pipe(Infinity, isNumber()); // true
 * pipe("123", isNumber()); // false
 * pipe(null, isNumber()); // false
 * ```
 */
export const isNumber: {
    (): (target: unknown) => target is number
    (target: unknown): target is number
} = dfdlT((target: unknown): target is number => {
    return typeof target === "number"
}, 1)
