import { dfdlT } from "../dfdlT"

/**
 * # lastIndexOfOrElse
 *
 * ```ts
 * function Str.lastIndexOfOrElse<T>(
 *     target: string,
 *     source: string,
 *     orElse: (target: string) => T,
 * ): number | T
 * ```
 *
 * Returns the index of the last occurrence of `source` string in `target` string, or the result of calling `orElse` function with `target` if not found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.lastIndexOfOrElse("hello world hello", "hello", () => -1); // 12
 * Str.lastIndexOfOrElse("hello world", "foo", (str) => str.length); // 11
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe(
 *     "hello world hello",
 *     Str.lastIndexOfOrElse("hello", () => -1),
 * ); // 12
 *
 * pipe(
 *     "hello world",
 *     Str.lastIndexOfOrElse("foo", (str) => str.length),
 * ); // 11
 * ```
 *
 */
export const lastIndexOfOrElse: {
    <T>(source: string, orElse: (target: string) => T): (target: string) => number | T
    <T>(target: string, source: string, orElse: (target: string) => T): number | T
} = dfdlT(<T>(a: string, b: string, orElse: (target: string) => T): number | T => {
    const idx = a.lastIndexOf(b)
    return Number.isFinite(idx) ? idx : orElse(a)
}, 3)
