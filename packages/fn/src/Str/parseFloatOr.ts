import { dfdlT } from "../dfdlT"

/**
 * # parseFloatOr
 *
 * ```ts
 * function Str.parseFloatOr<T>(target: string, or: T): number | T
 * ```
 *
 * Parses `target` string and returns a floating point number, or the `or` value if parsing fails.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.parseFloatOr("3.14", 0); // 3.14
 * Str.parseFloatOr("abc", 0); // 0
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("3.14", Str.parseFloatOr(0)); // 3.14
 * pipe("abc", Str.parseFloatOr(0)); // 0
 * ```
 *
 */
export const parseFloatOr: {
    <T>(or: T): (target: string) => number | T
    <T>(target: string, or: T): number | T
} = dfdlT(<T>(target: string, or: T): number | T => {
    const value = Number.parseFloat(target)
    return Number.isFinite(value) ? value : or
}, 2)
