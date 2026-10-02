import { dfdlT } from "../dfdlT"

/**
 * # parseFloatOrThrow
 *
 * ```ts
 * function Str.parseFloatOrThrow(target: string): number
 * ```
 *
 * Parses `target` string and returns a floating point number, or throws an error if parsing fails.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.parseFloatOrThrow("3.14"); // 3.14
 * Str.parseFloatOrThrow("abc"); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("3.14", Str.parseFloatOrThrow()); // 3.14
 * pipe("abc", Str.parseFloatOrThrow()); // throws FnError
 * ```
 *
 */
export const parseFloatOrThrow: {
    (): (target: string) => number
    (target: string): number
} = dfdlT((target: string): number => {
    const value = Number.parseFloat(target)
    if (Number.isFinite(value)) return value
    throw new Error("String.parseFloatOrThrow: Failed to parse.")
}, 1)
