import { dfdlT } from "@monstermann/dfdl"

/**
 * `max(target, source)`
 *
 * Returns the larger of `target` and `source`.
 *
 * ```ts
 * max(5, 3); // 5
 * max(2, 7); // 7
 * max(4, 4); // 4
 * ```
 *
 * ```ts
 * pipe(5, max(3)); // 5
 * pipe(2, max(7)); // 7
 * pipe(4, max(4)); // 4
 * ```
 */
export const max: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return Math.max(a, b)
}, 2)
