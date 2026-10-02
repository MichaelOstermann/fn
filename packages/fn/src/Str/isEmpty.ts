import { dfdlT } from "../dfdl/dfdlT"

/**
 * # isEmpty
 *
 * ```ts
 * function Str.isEmpty(target: string): boolean
 * ```
 *
 * Checks if `target` string is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.isEmpty(""); // true
 * Str.isEmpty("hello"); // false
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("", Str.isEmpty()); // true
 * pipe("hello", Str.isEmpty()); // false
 * ```
 *
 */
export const isEmpty: {
    (): (target: string) => boolean
    (target: string): boolean
} = dfdlT((target: string): boolean => {
    return target === ""
}, 1)
