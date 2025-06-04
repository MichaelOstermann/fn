import { dual } from "@monstermann/dfdl"

/**
 * `ceil(target)`
 *
 * Returns the smallest integer greater than or equal to `target`.
 *
 * ```ts
 * ceil(4.3); // 5
 * ceil(-4.7); // -4
 * ```
 *
 * ```ts
 * pipe(4.3, ceil()); // 5
 * pipe(-4.7, ceil()); // -4
 * ```
 */
export const ceil: {
    (): (target: number) => number
    (target: number): number
} = dual(1, (target: number): number => {
    return Math.ceil(target)
})
