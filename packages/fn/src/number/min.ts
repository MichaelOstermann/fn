import { dual } from "@monstermann/dfdl"

/**
 * `min(target, source)`
 *
 * Returns the smaller of `target` and `source`.
 *
 * ```ts
 * min(5, 3); // 3
 * min(2, 7); // 2
 * min(4, 4); // 4
 * ```
 *
 * ```ts
 * pipe(5, min(3)); // 3
 * pipe(2, min(7)); // 2
 * pipe(4, min(4)); // 4
 * ```
 */
export const min: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dual(2, (a: number, b: number): number => {
    return Math.min(a, b)
})
