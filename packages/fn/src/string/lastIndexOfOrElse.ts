import { dfdlT } from "@monstermann/dfdl"

/**
 * `lastIndexOfOrElse(target, source, orElse)`
 *
 * Returns the index of the last occurrence of `source` string in `target` string, or the result of calling `orElse` function with `target` if not found.
 *
 * ```ts
 * lastIndexOfOrElse("hello world hello", "hello", () => -1); // 12
 * lastIndexOfOrElse("hello world", "foo", (str) => str.length); // 11
 * ```
 *
 * ```ts
 * pipe(
 *     "hello world hello",
 *     lastIndexOfOrElse("hello", () => -1),
 * ); // 12
 *
 * pipe(
 *     "hello world",
 *     lastIndexOfOrElse("foo", (str) => str.length),
 * ); // 11
 * ```
 */
export const lastIndexOfOrElse: {
    <T>(source: string, orElse: (target: string) => T): (target: string) => number | T
    <T>(target: string, source: string, orElse: (target: string) => T): number | T
} = dfdlT(<T>(a: string, b: string, orElse: (target: string) => T): number | T => {
    const idx = a.lastIndexOf(b)
    return Number.isFinite(idx) ? idx : orElse(a)
}, 3)
