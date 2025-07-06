import { dfdlT } from "@monstermann/dfdl"

/**
 * `indexOfOrElse(target, source, orElse)`
 *
 * Returns the index of the first occurrence of `source` string in `target` string, or the result of calling `orElse` function with `target` if not found.
 *
 * ```ts
 * indexOfOrElse("hello world", "world", () => -1); // 6
 * indexOfOrElse("hello world", "foo", (str) => str.length); // 11
 * ```
 *
 * ```ts
 * pipe(
 *     "hello world",
 *     indexOfOrElse("world", () => -1),
 * ); // 6
 *
 * pipe(
 *     "hello world",
 *     indexOfOrElse("foo", (str) => str.length),
 * ); // 11
 * ```
 */
export const indexOfOrElse: {
    <T>(source: string, orElse: (target: string) => T): (target: string) => number | T
    <T>(target: string, source: string, orElse: (target: string) => T): number | T
} = dfdlT(<T>(a: string, b: string, orElse: (target: string) => T): number | T => {
    const idx = a.indexOf(b)
    return Number.isFinite(idx) ? idx : orElse(a)
}, 3)
