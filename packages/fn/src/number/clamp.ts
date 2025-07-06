import { dfdlT } from "@monstermann/dfdl"

/**
 * `clamp(value, min, max)`
 *
 * Constrains `value` to be between `min` and `max` (inclusive).
 *
 * ```ts
 * clamp(10, 0, 5); // 5
 * clamp(-2, 0, 5); // 0
 * clamp(3, 0, 5); // 3
 * ```
 *
 * ```ts
 * pipe(10, clamp(0, 5)); // 5
 * pipe(-2, clamp(0, 5)); // 0
 * pipe(3, clamp(0, 5)); // 3
 * ```
 */
export const clamp: {
    (min: number, max: number): (value: number) => number
    (value: number, min: number, max: number): number
} = dfdlT((value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max)
}, 3)
