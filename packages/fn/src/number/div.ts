import { dfdlT } from "@monstermann/dfdl"

/**
 * `div(target, source)`
 *
 * Divides `target` by `source` and returns the result.
 *
 * ```ts
 * div(10, 2); // 5
 * div(15, 3); // 5
 * ```
 *
 * ```ts
 * pipe(10, div(2)); // 5
 * pipe(15, div(3)); // 5
 * ```
 */
export const div: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return a / b
}, 2)
