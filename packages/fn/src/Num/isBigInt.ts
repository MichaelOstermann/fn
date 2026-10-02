import { dfdlT } from "../dfdl/dfdlT"

/**
 * # isBigInt
 *
 * ```ts
 * function Num.isBigInt(target: unknown): target is bigint
 * ```
 *
 * Returns `true` if `target` is a bigint, otherwise `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.isBigInt(123n); // true
 * Num.isBigInt(123); // false
 * Num.isBigInt("123"); // false
 * Num.isBigInt(null); // false
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(123n, Num.isBigInt()); // true
 * pipe(123, Num.isBigInt()); // false
 * pipe("123", Num.isBigInt()); // false
 * pipe(null, Num.isBigInt()); // false
 * ```
 *
 */
export const isBigInt: {
    (): (target: unknown) => target is bigint
    (target: unknown): target is bigint
} = dfdlT((target: unknown): target is bigint => {
    return typeof target === "bigint"
}, 1)
