import { dfdlT } from "../dfdl/dfdlT"

/**
 * # padEnd
 *
 * ```ts
 * function Str.padEnd(
 *     target: string,
 *     length: number,
 *     fill: string,
 * ): string
 * ```
 *
 * Pads `target` string from the end with `fill` string until the result reaches the specified `length`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.padEnd("hello", 10, " "); // "hello     "
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello", Str.padEnd(10, " ")); // "hello     "
 * ```
 *
 */
export const padEnd: {
    (length: number, fill: string): (target: string) => string
    (target: string, length: number, fill: string): string
} = dfdlT((target: string, length: number, fill: string): string => {
    return target.padEnd(length, fill)
}, 3)
