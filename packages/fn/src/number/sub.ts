import { dfdlT } from "@monstermann/dfdl"

/**
 * `sub(target, source)`
 *
 * Subtracts `source` from `target` and returns the result.
 *
 * ```ts
 * sub(10, 3); // 7
 * sub(5, 8); // -3
 * ```
 *
 * ```ts
 * pipe(10, sub(3)); // 7
 * pipe(5, sub(8)); // -3
 * ```
 */
export const sub: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return a - b
}, 2)
