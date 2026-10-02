import { dfdlT } from "../dfdl/dfdlT"

/**
 * # isInRange
 *
 * ```ts
 * function Num.isInRange(
 *     target: number,
 *     start: number,
 *     end: number,
 * ): boolean
 * ```
 *
 * Returns `true` if `target` is within the range between `start` and `end` (inclusive), otherwise `false`. The order of `start` and `end` does not matter.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Num } from "@monstermann/fn";
 *
 * Num.isInRange(5, 1, 10); // true
 * Num.isInRange(0, 1, 10); // false
 * Num.isInRange(5, 10, 1); // true
 * Num.isInRange(5, 5, 10); // true
 * ```
 *
 * ```ts [data-last]
 * import { Num } from "@monstermann/fn";
 *
 * pipe(5, Num.isInRange(1, 10)); // true
 * pipe(0, Num.isInRange(1, 10)); // false
 * pipe(5, Num.isInRange(10, 1)); // true
 * pipe(5, Num.isInRange(5, 10)); // true
 * ```
 *
 */
export const isInRange: {
    (start: number, end: number): (target: number) => boolean
    (target: number, start: number, end: number): boolean
} = dfdlT((target: number, start: number, end: number): boolean => {
    return target >= Math.min(start, end) && target <= Math.max(start, end)
}, 3)
