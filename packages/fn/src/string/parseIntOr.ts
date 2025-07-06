import { dfdlT } from "@monstermann/dfdl"

/**
 * `parseIntOr(target, or)`
 *
 * Parses `target` string and returns an integer, or the `or` value if parsing fails.
 *
 * ```ts
 * parseIntOr("42", 0); // 42
 * parseIntOr("abc", 0); // 0
 * ```
 *
 * ```ts
 * pipe("42", parseIntOr(0)); // 42
 * pipe("abc", parseIntOr(0)); // 0
 * ```
 */
export const parseIntOr: {
    <T>(or: T): (target: string) => number | T
    <T>(target: string, or: T): number | T
} = dfdlT(<T>(target: string, or: T): number | T => {
    const value = Number.parseInt(target)
    return Number.isFinite(value) ? value : or
}, 2)
