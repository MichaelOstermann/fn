import { dfdlT } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `parseIntOrThrow(target)`
 *
 * Parses `target` string and returns an integer, or throws an error if parsing fails.
 *
 * ```ts
 * parseIntOrThrow("42"); // 42
 * parseIntOrThrow("abc"); // throws FnError
 * ```
 *
 * ```ts
 * pipe("42", parseIntOrThrow()); // 42
 * pipe("abc", parseIntOrThrow()); // throws FnError
 * ```
 */
export const parseIntOrThrow: {
    (): (target: string) => number
    (target: string): number
} = dfdlT((target: string): number => {
    const value = Number.parseInt(target)
    if (Number.isFinite(value)) return value
    throw new FnError("String.parseIntOrThrow: Failed to parse.", [target])
}, 1)
