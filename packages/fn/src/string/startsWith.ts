import { dual } from "@monstermann/dfdl"

/**
 * `startsWith(target, source)`
 *
 * Checks if `target` string starts with `source` string.
 *
 * ```ts
 * startsWith("hello world", "hello"); // true
 * startsWith("hello world", "world"); // false
 * ```
 *
 * ```ts
 * pipe("hello world", startsWith("hello")); // true
 * pipe("hello world", startsWith("world")); // false
 * ```
 */
export const startsWith: {
    (source: string): (target: string) => boolean
    (target: string, source: string): boolean
} = dual(2, (a: string, b: string): boolean => {
    return a.startsWith(b)
})
