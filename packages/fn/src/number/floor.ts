import { dual } from "@monstermann/dfdl"

/**
 * `floor(target)`
 *
 * Returns the largest integer less than or equal to `target`.
 *
 * ```ts
 * floor(4.7); // 4
 * floor(-4.3); // -5
 * ```
 *
 * ```ts
 * pipe(4.7, floor()); // 4
 * pipe(-4.3, floor()); // -5
 * ```
 */
export const floor: {
    (): (target: number) => number
    (target: number): number
} = dual(1, (target: number): number => {
    return Math.floor(target)
})
