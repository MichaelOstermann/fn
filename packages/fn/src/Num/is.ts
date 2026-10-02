import { dfdlT } from "../dfdlT"

/**
 * # is
 *
 * ```ts
 * function Num.is(target: unknown): target is number
 * ```
 *
 * Returns `true` if `target` is a number, otherwise `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.is(42); // true
 * Num.is(3.14); // true
 * Num.is(NaN); // true
 * Num.is(Infinity); // true
 * Num.is("123"); // false
 * Num.is(null); // false
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(42, Num.is()); // true
 * pipe(3.14, Num.is()); // true
 * pipe(NaN, Num.is()); // true
 * pipe(Infinity, Num.is()); // true
 * pipe("123", Num.is()); // false
 * pipe(null, Num.is()); // false
 * ```
 *
 */
export const is: {
    (): (target: unknown) => target is number
    (target: unknown): target is number
} = dfdlT((target: unknown): target is number => {
    return typeof target === "number"
}, 1)
