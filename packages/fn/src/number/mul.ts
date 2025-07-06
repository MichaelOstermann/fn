import { dfdlT } from "@monstermann/dfdl"

/**
 * `mul(target, source)`
 *
 * Multiplies `target` by `source` and returns the result.
 *
 * ```ts
 * mul(5, 3); // 15
 * mul(7, 2); // 14
 * ```
 *
 * ```ts
 * pipe(5, mul(3)); // 15
 * pipe(7, mul(2)); // 14
 * ```
 */
export const mul: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return a * b
}, 2)
