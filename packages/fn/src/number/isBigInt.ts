import { dfdlT } from "@monstermann/dfdl"

/**
 * `isBigInt(target)`
 *
 * Returns `true` if `target` is a bigint, otherwise `false`. This function acts as a type guard.
 *
 * ```ts
 * isBigInt(123n); // true
 * isBigInt(123); // false
 * isBigInt("123"); // false
 * isBigInt(null); // false
 * ```
 *
 * ```ts
 * pipe(123n, isBigInt()); // true
 * pipe(123, isBigInt()); // false
 * pipe("123", isBigInt()); // false
 * pipe(null, isBigInt()); // false
 * ```
 */
export const isBigInt: {
    (): (target: unknown) => target is bigint
    (target: unknown): target is bigint
} = dfdlT((target: unknown): target is bigint => {
    return typeof target === "bigint"
}, 1)
