import { dfdlT } from "@monstermann/dfdl"

/**
 * `hasAny(target, source)`
 *
 * Checks if `target` string contains any of the strings from the `source` iterable.
 *
 * ```ts
 * hasAny("hello world", ["foo", "world"]); // true
 * ```
 *
 * ```ts
 * pipe("hello world", hasAny(["foo", "world"])); // true
 * ```
 */
export const hasAny: {
    (source: Iterable<string>): (target: string) => boolean
    (target: string, source: Iterable<string>): boolean
} = dfdlT((target: string, source: Iterable<string>): boolean => {
    for (const value of source) {
        if (target.includes(value)) return true
    }
    return false
}, 2)
