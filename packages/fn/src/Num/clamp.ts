import { dfdlT } from "../dfdl/dfdlT"

/**
 * # clamp
 *
 * ```ts
 * function Num.clamp(
 *     value: number,
 *     min: number,
 *     max: number,
 * ): number
 * ```
 *
 * Constrains `value` to be between `min` and `max` (inclusive).
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.clamp(10, 0, 5); // 5
 * Num.clamp(-2, 0, 5); // 0
 * Num.clamp(3, 0, 5); // 3
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(10, Num.clamp(0, 5)); // 5
 * pipe(-2, Num.clamp(0, 5)); // 0
 * pipe(3, Num.clamp(0, 5)); // 3
 * ```
 *
 */
export const clamp: {
    (min: number, max: number): (value: number) => number
    (value: number, min: number, max: number): number
} = dfdlT((value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max)
}, 3)
