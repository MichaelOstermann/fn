import { dual } from "@monstermann/dfdl"

/**
 * `round(target)`
 *
 * Returns `target` rounded to the nearest integer.
 *
 * ```ts
 * round(4.3); // 4
 * round(4.7); // 5
 * round(-4.3); // -4
 * round(-4.7); // -5
 * ```
 *
 * ```ts
 * pipe(4.3, round()); // 4
 * pipe(4.7, round()); // 5
 * pipe(-4.3, round()); // -4
 * pipe(-4.7, round()); // -5
 * ```
 */
export const round: {
    (): (target: number) => number
    (target: number): number
} = dual(1, (target: number): number => {
    return Math.round(target)
})
