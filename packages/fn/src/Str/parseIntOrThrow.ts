import { dfdlT } from "../dfdl/dfdlT"

/**
 * # parseIntOrThrow
 *
 * ```ts
 * function Str.parseIntOrThrow(target: string): number
 * ```
 *
 * Parses `target` string and returns an integer, or throws an error if parsing fails.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.parseIntOrThrow("42"); // 42
 * Str.parseIntOrThrow("abc"); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("42", Str.parseIntOrThrow()); // 42
 * pipe("abc", Str.parseIntOrThrow()); // throws FnError
 * ```
 *
 */
export const parseIntOrThrow: {
    (): (target: string) => number
    (target: string): number
} = dfdlT((target: string): number => {
    const value = Number.parseInt(target)
    if (Number.isFinite(value)) return value
    throw new Error("String.parseIntOrThrow: Failed to parse.")
}, 1)
