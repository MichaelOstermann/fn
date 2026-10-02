import { dfdlT } from "../dfdlT"

/**
 * # isFinite
 *
 * ```ts
 * function Num.isFinite(target: number): boolean
 * ```
 *
 * Returns `true` if `target` is a finite number, otherwise `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.isFinite(42); // true
 * Num.isFinite(3.14); // true
 * Num.isFinite(Infinity); // false
 * Num.isFinite(-Infinity); // false
 * Num.isFinite(NaN); // false
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(42, Num.isFinite()); // true
 * pipe(3.14, Num.isFinite()); // true
 * pipe(Infinity, Num.isFinite()); // false
 * pipe(-Infinity, Num.isFinite()); // false
 * pipe(NaN, Num.isFinite()); // false
 * ```
 *
 */
export const isFinite: {
    (): (target: number) => boolean
    (target: number): boolean
} = dfdlT((target: number): boolean => {
    return Number.isFinite(target)
}, 1)
