import { dfdlT } from "../dfdlT"

/**
 * # parseFloatOrElse
 *
 * ```ts
 * function Str.parseFloatOrElse<T>(
 *     target: string,
 *     orElse: (target: string) => T,
 * ): number | T
 * ```
 *
 * Parses `target` string and returns a floating point number, or the result of calling `orElse` function with `target` if parsing fails.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.parseFloatOrElse("3.14", () => 0); // 3.14
 * Str.parseFloatOrElse("abc", (str) => str.length); // 3
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe(
 *     "3.14",
 *     Str.parseFloatOrElse(() => 0),
 * ); // 3.14
 *
 * pipe(
 *     "abc",
 *     Str.parseFloatOrElse((str) => str.length),
 * ); // 3
 * ```
 *
 */
export const parseFloatOrElse: {
    <T>(orElse: (target: string) => T): (target: string) => number | T
    <T>(target: string, orElse: (target: string) => T): number | T
} = dfdlT(<T>(target: string, orElse: (target: string) => T): number | T => {
    const value = Number.parseFloat(target)
    return Number.isFinite(value) ? value : orElse(target)
}, 2)
