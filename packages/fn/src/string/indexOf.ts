import { dfdlT } from "@monstermann/dfdl"

/**
 * `indexOf(target, source)`
 *
 * Returns the index of the first occurrence of `source` string in `target` string, or -1 if not found.
 *
 * ```ts
 * indexOf("hello world", "world"); // 6
 * ```
 *
 * ```ts
 * pipe("hello world", indexOf("world")); // 6
 * ```
 */
export const indexOf: {
    (source: string): (target: string) => number
    (target: string, source: string): number
} = dfdlT((a: string, b: string): number => {
    return a.indexOf(b)
}, 2)
