import { dfdlT } from "../dfdlT"

/**
 * # parseFloat
 *
 * ```ts
 * function Str.parseFloat(target: string): number
 * ```
 *
 * Parses `target` string and returns a floating point number.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.parseFloat("3.14"); // 3.14
 * Str.parseFloat("42.5abc"); // 42.5
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("3.14", Str.parseFloat()); // 3.14
 * pipe("42.5abc", Str.parseFloat()); // 42.5
 * ```
 *
 */
export const parseFloat: {
    (): (target: string) => number
    (target: string): number
} = dfdlT((target: string): number => {
    return Number.parseFloat(target)
}, 1)
