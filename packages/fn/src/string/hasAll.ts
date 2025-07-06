import { dfdlT } from "@monstermann/dfdl"

/**
 * `hasAll(target, source)`
 *
 * Checks if `target` string contains all strings from the `source` iterable.
 *
 * ```ts
 * hasAll("hello world", ["hello", "world"]); // true
 * ```
 *
 * ```ts
 * pipe("hello world", hasAll(["hello", "world"])); // true
 * ```
 */
export const hasAll: {
    (source: Iterable<string>): (target: string) => boolean
    (target: string, source: Iterable<string>): boolean
} = dfdlT((target: string, source: Iterable<string>): boolean => {
    for (const value of source) {
        if (!target.includes(value)) return false
    }
    return true
}, 2)
