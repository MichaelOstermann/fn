import { dual } from "@monstermann/dfdl"

/**
 * `lastIndexOf(target, source)`
 *
 * Returns the index of the last occurrence of `source` string in `target` string, or -1 if not found.
 *
 * ```ts
 * lastIndexOf("hello world hello", "hello"); // 12
 * ```
 *
 * ```ts
 * pipe("hello world hello", lastIndexOf("hello")); // 12
 * ```
 */
export const lastIndexOf: {
    (source: string): (target: string) => number
    (target: string, source: string): number
} = dual(2, (a: string, b: string): number => {
    return a.lastIndexOf(b)
})
