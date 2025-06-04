import { dual } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `parseFloatOrThrow(target)`
 *
 * Parses `target` string and returns a floating point number, or throws an error if parsing fails.
 *
 * ```ts
 * parseFloatOrThrow("3.14"); // 3.14
 * parseFloatOrThrow("abc"); // throws FnError
 * ```
 *
 * ```ts
 * pipe("3.14", parseFloatOrThrow()); // 3.14
 * pipe("abc", parseFloatOrThrow()); // throws FnError
 * ```
 */
export const parseFloatOrThrow: {
    (): (target: string) => number
    (target: string): number
} = dual(1, (target: string): number => {
    const value = Number.parseFloat(target)
    if (Number.isFinite(value)) return value
    throw new FnError("String.parseFloatOrThrow: Failed to parse.", [target])
})
