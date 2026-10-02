import { dfdlT } from "../dfdlT"

/**
 * # parseInt
 *
 * ```ts
 * function Str.parseInt(target: string): number
 * ```
 *
 * Parses `target` string and returns an integer.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.parseInt("42"); // 42
 * Str.parseInt("42.5"); // 42
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("42", Str.parseInt()); // 42
 * pipe("42.5", Str.parseInt()); // 42
 * ```
 *
 */
export const parseInt: {
    (): (target: string) => number
    (target: string): number
} = dfdlT((target: string): number => {
    return Number.parseInt(target)
}, 1)
