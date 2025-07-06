import { dfdlT } from "@monstermann/dfdl"

/**
 * `length(target)`
 *
 * Returns the length of `target` string.
 *
 * ```ts
 * length("hello world"); // 11
 * ```
 *
 * ```ts
 * pipe("hello world", length()); // 11
 * ```
 */
export const length: {
    (): (target: string) => number
    (target: string): number
} = dfdlT((target: string): number => {
    return target.length
}, 1)
