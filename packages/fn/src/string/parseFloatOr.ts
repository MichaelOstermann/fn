import { dual } from "@monstermann/dfdl"

/**
 * `parseFloatOr(target, or)`
 *
 * Parses `target` string and returns a floating point number, or the `or` value if parsing fails.
 *
 * ```ts
 * parseFloatOr("3.14", 0); // 3.14
 * parseFloatOr("abc", 0); // 0
 * ```
 *
 * ```ts
 * pipe("3.14", parseFloatOr(0)); // 3.14
 * pipe("abc", parseFloatOr(0)); // 0
 * ```
 */
export const parseFloatOr: {
    <T>(or: T): (target: string) => number | T
    <T>(target: string, or: T): number | T
} = dual(2, <T>(target: string, or: T): number | T => {
    const value = Number.parseFloat(target)
    return Number.isFinite(value) ? value : or
})
