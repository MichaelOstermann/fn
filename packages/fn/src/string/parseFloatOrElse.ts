import { dfdlT } from "@monstermann/dfdl"

/**
 * `parseFloatOrElse(target, orElse)`
 *
 * Parses `target` string and returns a floating point number, or the result of calling `orElse` function with `target` if parsing fails.
 *
 * ```ts
 * parseFloatOrElse("3.14", () => 0); // 3.14
 * parseFloatOrElse("abc", (str) => str.length); // 3
 * ```
 *
 * ```ts
 * pipe(
 *     "3.14",
 *     parseFloatOrElse(() => 0),
 * ); // 3.14
 *
 * pipe(
 *     "abc",
 *     parseFloatOrElse((str) => str.length),
 * ); // 3
 * ```
 */
export const parseFloatOrElse: {
    <T>(orElse: (target: string) => T): (target: string) => number | T
    <T>(target: string, orElse: (target: string) => T): number | T
} = dfdlT(<T>(target: string, orElse: (target: string) => T): number | T => {
    const value = Number.parseFloat(target)
    return Number.isFinite(value) ? value : orElse(target)
}, 2)
