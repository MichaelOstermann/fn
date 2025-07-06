import { dfdlT } from "@monstermann/dfdl"

/**
 * `parseFloat(target)`
 *
 * Parses `target` string and returns a floating point number.
 *
 * ```ts
 * parseFloat("3.14"); // 3.14
 * parseFloat("42.5abc"); // 42.5
 * ```
 *
 * ```ts
 * pipe("3.14", parseFloat()); // 3.14
 * pipe("42.5abc", parseFloat()); // 42.5
 * ```
 */
export const parseFloat: {
    (): (target: string) => number
    (target: string): number
} = dfdlT((target: string): number => {
    return Number.parseFloat(target)
}, 1)
