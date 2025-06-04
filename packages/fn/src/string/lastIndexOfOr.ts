import { dual } from "@monstermann/dfdl"

/**
 * `lastIndexOfOr(target, source, or)`
 *
 * Returns the index of the last occurrence of `source` string in `target` string, or the `or` value if not found.
 *
 * ```ts
 * lastIndexOfOr("hello world hello", "hello", -1); // 12
 * lastIndexOfOr("hello world", "foo", -1); // -1
 * ```
 *
 * ```ts
 * pipe("hello world hello", lastIndexOfOr("hello", -1)); // 12
 * pipe("hello world", lastIndexOfOr("foo", -1)); // -1
 * ```
 */
export const lastIndexOfOr: {
    <T>(source: string, or: T): (target: string) => number | T
    <T>(target: string, source: string, or: T): number | T
} = dual(3, <T>(a: string, b: string, or: T): number | T => {
    const idx = a.lastIndexOf(b)
    return Number.isFinite(idx) ? idx : or
})
