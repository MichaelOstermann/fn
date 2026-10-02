import { dfdlT } from "../dfdl/dfdlT"

/**
 * # padStart
 *
 * ```ts
 * function Str.padStart(
 *     target: string,
 *     length: number,
 *     fill: string,
 * ): string
 * ```
 *
 * Pads `target` string from the start with `fill` string until the result reaches the specified `length`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.padStart("hello", 10, " "); // "     hello"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello", Str.padStart(10, " ")); // "     hello"
 * ```
 *
 */
export const padStart: {
    (length: number, fill: string): (target: string) => string
    (target: string, length: number, fill: string): string
} = dfdlT((target: string, length: number, fill: string): string => {
    return target.padStart(length, fill)
}, 3)
