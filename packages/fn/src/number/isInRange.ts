import { dual } from "@monstermann/dfdl"

/**
 * `isInRange(target, start, end)`
 *
 * Returns `true` if `target` is within the range between `start` and `end` (inclusive), otherwise `false`. The order of `start` and `end` does not matter.
 *
 * ```ts
 * isInRange(5, 1, 10); // true
 * isInRange(0, 1, 10); // false
 * isInRange(5, 10, 1); // true
 * isInRange(5, 5, 10); // true
 * ```
 *
 * ```ts
 * pipe(5, isInRange(1, 10)); // true
 * pipe(0, isInRange(1, 10)); // false
 * pipe(5, isInRange(10, 1)); // true
 * pipe(5, isInRange(5, 10)); // true
 * ```
 */
export const isInRange: {
    (start: number, end: number): (target: number) => boolean
    (target: number, start: number, end: number): boolean
} = dual(3, (target: number, start: number, end: number): boolean => {
    return target >= Math.min(start, end) && target <= Math.max(start, end)
})
