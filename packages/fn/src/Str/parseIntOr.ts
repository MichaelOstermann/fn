import { dfdlT } from "../dfdlT"

/**
 * # parseIntOr
 *
 * ```ts
 * function Str.parseIntOr<T>(target: string, or: T): number | T
 * ```
 *
 * Parses `target` string and returns an integer, or the `or` value if parsing fails.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.parseIntOr("42", 0); // 42
 * Str.parseIntOr("abc", 0); // 0
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("42", Str.parseIntOr(0)); // 42
 * pipe("abc", Str.parseIntOr(0)); // 0
 * ```
 *
 */
export const parseIntOr: {
    <T>(or: T): (target: string) => number | T
    <T>(target: string, or: T): number | T
} = dfdlT(<T>(target: string, or: T): number | T => {
    const value = Number.parseInt(target)
    return Number.isFinite(value) ? value : or
}, 2)
