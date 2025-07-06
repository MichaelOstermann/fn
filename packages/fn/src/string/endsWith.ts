import { dfdlT } from "@monstermann/dfdl"

/**
 * `endsWith(target, source)`
 *
 * Checks if `target` string ends with `source` string.
 *
 * ```ts
 * endsWith("hello world", "world"); // true
 * ```
 *
 * ```ts
 * pipe("hello world", endsWith("world")); // true
 * ```
 */
export const endsWith: {
    (source: string): (target: string) => boolean
    (target: string, source: string): boolean
} = dfdlT((a: string, b: string): boolean => {
    return a.endsWith(b)
}, 2)
