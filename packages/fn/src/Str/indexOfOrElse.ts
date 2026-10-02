import { dfdlT } from "../dfdlT"

/**
 * # indexOfOrElse
 *
 * ```ts
 * function Str.indexOfOrElse<T>(
 *     target: string,
 *     source: string,
 *     orElse: (target: string) => T,
 * ): number | T
 * ```
 *
 * Returns the index of the first occurrence of `source` string in `target` string, or the result of calling `orElse` function with `target` if not found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.indexOfOrElse("hello world", "world", () => -1); // 6
 * Str.indexOfOrElse("hello world", "foo", (str) => str.length); // 11
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe(
 *     "hello world",
 *     Str.indexOfOrElse("world", () => -1),
 * ); // 6
 *
 * pipe(
 *     "hello world",
 *     Str.indexOfOrElse("foo", (str) => str.length),
 * ); // 11
 * ```
 *
 */
export const indexOfOrElse: {
    <T>(source: string, orElse: (target: string) => T): (target: string) => number | T
    <T>(target: string, source: string, orElse: (target: string) => T): number | T
} = dfdlT(<T>(a: string, b: string, orElse: (target: string) => T): number | T => {
    const idx = a.indexOf(b)
    return Number.isFinite(idx) ? idx : orElse(a)
}, 3)
