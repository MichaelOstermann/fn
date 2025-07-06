import { dfdlT } from "@monstermann/dfdl"

/**
 * `indexOfOr(target, source, or)`
 *
 * Returns the index of the first occurrence of `source` string in `target` string, or the `or` value if not found.
 *
 * ```ts
 * indexOfOr("hello world", "world", -1); // 6
 * indexOfOr("hello world", "foo", -1); // -1
 * ```
 *
 * ```ts
 * pipe("hello world", indexOfOr("world", -1)); // 6
 * pipe("hello world", indexOfOr("foo", -1)); // -1
 * ```
 */
export const indexOfOr: {
    <T>(source: string, or: T): (target: string) => number | T
    <T>(target: string, source: string, or: T): number | T
} = dfdlT(<T>(a: string, b: string, or: T): number | T => {
    const idx = a.indexOf(b)
    return Number.isFinite(idx) ? idx : or
}, 3)
