import { dual } from "@monstermann/dfdl"

/**
 * `has(target, source)`
 *
 * Checks if `target` string contains `source` string.
 *
 * ```ts
 * has("hello world", "world"); // true
 * ```
 *
 * ```ts
 * pipe("hello world", has("world")); // true
 * ```
 */
export const has: {
    (source: string): (target: string) => boolean
    (target: string, source: string): boolean
} = dual(2, (target: string, source: string): boolean => {
    return target.includes(source)
})
