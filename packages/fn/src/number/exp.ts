import { dual } from "@monstermann/dfdl"

/**
 * `exp(target, source)`
 *
 * Raises `target` to the power of `source` and returns the result.
 *
 * ```ts
 * exp(2, 3); // 8
 * exp(5, 2); // 25
 * ```
 *
 * ```ts
 * pipe(2, exp(3)); // 8
 * pipe(5, exp(2)); // 25
 * ```
 */
export const exp: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dual(2, (a: number, b: number): number => {
    return a ** b
})
