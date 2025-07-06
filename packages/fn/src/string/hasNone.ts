import { dfdlT } from "@monstermann/dfdl"

/**
 * `hasNone(target, source)`
 *
 * Checks if `target` string contains none of the strings from the `source` iterable.
 *
 * ```ts
 * hasNone("hello world", ["foo", "bar"]); // true
 * ```
 *
 * ```ts
 * pipe("hello world", hasNone(["foo", "bar"])); // true
 * ```
 */
export const hasNone: {
    (source: Iterable<string>): (target: string) => boolean
    (target: string, source: Iterable<string>): boolean
} = dfdlT((target: string, source: Iterable<string>): boolean => {
    for (const value of source) {
        if (target.includes(value)) return false
    }
    return true
}, 2)
