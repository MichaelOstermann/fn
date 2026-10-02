import { dfdlT } from "../dfdlT"

/**
 * # parseIntOrElse
 *
 * ```ts
 * function Str.parseIntOrElse<T>(
 *     target: string,
 *     orElse: (target: string) => T,
 * ): number | T
 * ```
 *
 * Parses `target` string and returns an integer, or the result of calling `orElse` function with `target` if parsing fails.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.parseIntOrElse("42", () => 0); // 42
 * Str.parseIntOrElse("abc", (str) => str.length); // 3
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe(
 *     "42",
 *     Str.parseIntOrElse(() => 0),
 * ); // 42
 *
 * pipe(
 *     "abc",
 *     Str.parseIntOrElse((str) => str.length),
 * ); // 3
 * ```
 *
 */
export const parseIntOrElse: {
    <T>(orElse: (target: string) => T): (target: string) => number | T
    <T>(target: string, orElse: (target: string) => T): number | T
} = dfdlT(<T>(target: string, orElse: (target: string) => T): number | T => {
    const value = Number.parseInt(target)
    return Number.isFinite(value) ? value : orElse(target)
}, 2)
